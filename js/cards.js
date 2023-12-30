const postCards = document.querySelector('.cards')

const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=12'

const getCards = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        data.map(item => {
            const card = document.createElement("div")
            card.classList.add("postCard");

            card.innerHTML = `
            <img src="https://assets-global.website-files.com/5ea9a731ca3c740bf6c0ad17/6294b0635fc1ad0999b1de44_Is%20javascript%20frontend%20or%20backend%201600x800.png" alt="js">
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