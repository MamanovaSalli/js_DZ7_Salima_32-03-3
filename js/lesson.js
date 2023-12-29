const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneRes = document.querySelector('#phone_result')

const regExp = /^\+996 [257931]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneRes.innerHTML = 'OK'
        phoneRes.style.color = 'green'


    } else {
        phoneRes.innerHTML = 'NOT OK'
        phoneRes.style.color = 'red'
    }
}

//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let autoSliderIndex = 0

const hideTabCont = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none'
        tabCard.style.opacity = 0
    })
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabCont = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.opacity = 1
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}

hideTabCont();
showTabCont()

const autoSlide = () => {
    setInterval(() => {
        autoSliderIndex++
        if (autoSliderIndex > tabContentBlocks.length - 1) {
            autoSliderIndex = 0
        }
        hideTabCont()
        showTabCont(autoSliderIndex)
    }, 3000)
}


tabsParent.onclick = () => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabCont()
                showTabCont(tabIndex)
                autoSliderIndex = tabIndex
            }
        })
    }
}
autoSlide()


//CONVERTOR

const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const rub = document.querySelector('#rub')

const converter = (element, targetElement, targetElement2, targetElement3, current) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/converter.json")
            const data = await response.json()

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.eur).toFixed(2)
                    targetElement3.value = (element.value / data.rub).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.usd / data.eur).toFixed(2)
                    targetElement3.value = (element.value * data.usd / data.rub).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
                    targetElement3.value = (element.value * data.eur / data.rub).toFixed(2)
                    break
                case 'rub':
                    targetElement.value = (element.value * data.rub).toFixed(2);
                    targetElement2.value = (element.value * data.rub / data.usd).toFixed(2);
                    targetElement3.value = (element.value * data.rub / data.eur).toFixed(2);
                    break
                default:
                    break
            }
            element.value === '' && (targetElement.value = targetElement2.value = targetElement3.value = '')

        } catch (e) {
            console.error(e)
        }
    }
}

/*const converter = (element, targetElement, targetElement2, targetElement3, current) => {
    element.oninput = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', '../data/converter.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()

        xhr.onload = () => {
            const data = JSON.parse(xhr.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.eur).toFixed(2)
                    targetElement3.value = (element.value / data.rub).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value * data.usd / data.eur).toFixed(2)
                    targetElement3.value = (element.value * data.usd / data.rub).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetElement2.value = (element.value * data.eur / data.usd).toFixed(2)
                    targetElement3.value = (element.value * data.eur / data.rub).toFixed(2)
                    break
                case 'rub':
                    targetElement.value = (element.value * data.rub).toFixed(2);
                    targetElement2.value = (element.value * data.rub / data.usd).toFixed(2);
                    targetElement3.value = (element.value * data.rub / data.eur).toFixed(2);
                    break
                default:
                    break
            }
            element.value === '' && (targetElement.value = targetElement2.value = targetElement3.value = '')
        }
    }
}*/


converter(som, usd, eur, rub, 'som')
converter(usd, som, eur, rub, 'usd')
converter(eur, som, usd, rub, 'eur')
converter(rub, som, usd, eur, 'rub')


//CARD SWITCHER

const card = document.querySelector('.card'),
    btnNext = document.querySelector('#btn-next'),
    btnPrev = document.querySelector('#btn-prev')

let countCard = 1
let countCard2 = 1

// const URL = ''
const cardsIn = async (index = 1) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${countCard}`)
        const data = await response.json()
        card.innerHTML = `
        <p>${data.title}</p>
        <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
        <span>${data.id}</span>
    `
    } catch (e) {
        console.log(e.message)
    }

}
cardsIn()

btnNext.addEventListener('click', () => {
    countCard++
    if (countCard > 200) {
        countCard = 1
    }
    cardsIn()
})

btnPrev.addEventListener('click', () => {
    countCard--
    if (countCard < 1) {
        countCard = 200
    }
    cardsIn()
})

const cards = async (index = 1) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${countCard2}`)
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e.message)
    }

}

btnNext.addEventListener('click', () => {
    countCard2++
    cards()
    if (countCard2 >= 100) {
        countCard2 = 0
    }
})
btnPrev.addEventListener('click', () => {
    countCard2--
    cards()
    if (countCard2 <= 1) {
        countCard2 = 101
    }
})

//WEATHER

const cityName = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

const BASE_URL = 'http://api.openweathermap.org'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

const citySearch = () => {
    cityName.addEventListener('input', async (event) => {
        try {
            const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
            const data = await response.json()
            city.innerHTML = data.name ? data.name : 'Город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + '&deg;C' : '...'
        } catch (e) {
            console.log(e)
        }
    })
}


citySearch()

// const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=20'
//
// const fetchTodo = async (url) => {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//        console.log(data)
//     }catch (e) {
//        console.log(e.message)
//     }
// }
//
// fetchTodo(URL)