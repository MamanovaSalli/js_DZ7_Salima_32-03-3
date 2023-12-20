const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}

modalTrigger.onclick = () => openModal()
modalCloseButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal)
        closeModal()
}

const showModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'


}
setTimeout(showModal, 10000)



const and = () => {
    // const isAnd = window.innerHeight + window.scrollY >= document.body.offsetHeight

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // modal.style.display = 'block'
        openModal()
        window.removeEventListener('scroll', and)
    }
}
window.addEventListener("scroll", and)

