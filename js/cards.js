const postCards = document.querySelector('.cards')

const URL = 'https://jsonplaceholder.typicode.com/posts'

const getCards = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        data.map(item => {
            const card = document.createElement("div")
            card.classList.add("postCard");

            card.innerHTML = `
            <img src="https://i.pinimg.com/originals/7a/fb/04/7afb0491c91b2f9e9aac56667c3be677.jpg" alt="js">
            <p>${item.title}</p>
            <p>${item.body}</p>
            `
            postCards.append(card)
        })
    } catch (e) {
        console.error(e)
    }
}

getCards()