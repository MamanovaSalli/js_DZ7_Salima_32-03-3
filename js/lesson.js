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
}
converter(som, usd, eur, rub, 'som')
converter(usd, som, eur, rub, 'usd')
converter(eur, som, usd, rub, 'eur')
converter(rub, som, usd, eur, 'rub')

