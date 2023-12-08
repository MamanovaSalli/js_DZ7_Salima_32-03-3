const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneRes = document.querySelector('#phone_result')

const regExp = /^\+996 [257931]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneRes.innerHTML = 'OK'
        phoneRes.style.color = 'green'


    }else {
        phoneRes.innerHTML='NOT OK'
        phoneRes.style.color='red'
    }
}

