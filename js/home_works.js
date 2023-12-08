
const checkGmail = document.querySelector('#gmail_input')
const gmailButt = document.querySelector('#gmail_button')
const gmailRes = document.querySelector('#gmail_result')

const regExp =  /^\w+@+[gmail]\w+\.+[com]+$/i

gmailButt.onclick= ()=>{
    if (regExp.test(checkGmail.value)){
        gmailRes.innerHTML='OK'
        gmailRes.style.color = 'blue'
    }else {
        gmailRes.innerHTML='NOT OK'
        gmailRes.style.color = 'red'
    }
}

let position = 0;
function recursionAnimation() {
    position = position + 7;
    if (position>450) return;

    document.querySelector('.child_block').style.left = position + 'px';
    animation();
}
function animation() {
    setTimeout(recursionAnimation, 50);
}
animation();