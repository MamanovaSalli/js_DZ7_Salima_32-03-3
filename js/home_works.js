const checkGmail = document.querySelector('#gmail_input')
const gmailButt = document.querySelector('#gmail_button')
const gmailRes = document.querySelector('#gmail_result')

const regExp = /^\w+@+[gmail]\w+\.+[com]+$/i

gmailButt.onclick = () => {
    if (regExp.test(checkGmail.value)) {
        gmailRes.innerHTML = 'OK'
        gmailRes.style.color = 'blue'
    } else {
        gmailRes.innerHTML = 'NOT OK'
        gmailRes.style.color = 'red'
    }
}

const childBlock = document.querySelector('.child_block')

const moveSpeedChildBlock = 0.5
const parentBlockWith = 480

let positionX = 0
let positionY = 0

const moveBlock = () => {
    if (positionY < parentBlockWith && positionX === 0) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionY >= parentBlockWith && positionX < parentBlockWith) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionY > 0 && positionX >= parentBlockWith) {
        positionY--
        childBlock.style.top = `${positionY}px`;
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionY === 0 && positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveBlock, moveSpeedChildBlock)
    }
}
moveBlock();


// STOP WATCH

const watchBlock = document.querySelector('.intervalMinutes')
const watchSecond = document.querySelector('.intervalSecond')
const watchHundSecond = document.querySelector('.intervalHundredths-second')
const watchBlockStart = document.querySelector('#start')
const watchBlockStop = document.querySelector('#stop')
const watchBlockReset = document.querySelector('#reset')

let interval

let minutes = 0;
let second = 0;
let milliseconds = 0;

const startTimer = () => {
    milliseconds++


    if (milliseconds <= 99) {
        watchHundSecond.innerHTML = milliseconds;
    }
    if (milliseconds === 100) {
        watchHundSecond.innerHTML = '00';
    }

    if (milliseconds > 99) {
        second++
        watchSecond.innerHTML = '0' + second

        milliseconds = 0
    }
    if (second > 9) {
        watchSecond.innerHTML = second

    }
    if (second > 59) {
        minutes++
        watchBlock.innerHTML = '0' + minutes

        second = 0
        watchSecond.innerHTML = '0' + second

    }
    if (minutes > 9) {
        watchBlock.innerHTML = minutes
    }


};
watchBlockStart.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10);
});
watchBlockStop.addEventListener('click', () => {
    clearInterval(interval)
});
watchBlockReset.addEventListener('click', () => {
    clearInterval(interval)
    minutes = 0
    second = 0
    milliseconds = 0

    watchBlock.innerHTML = '00'
    watchSecond.innerHTML = '00'
    watchHundSecond.innerHTML = '00'

});


//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block')

console.log(tabContentBlocks)
// const hideTabCont = () => {
//     tabContentBlocks.forEach(tabCard => {
//         tabCard.style.display = 'none'
//         // console.log(tabCard)
//     })
// }
//
// hideTabCont();
