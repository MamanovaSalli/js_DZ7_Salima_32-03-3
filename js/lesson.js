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








