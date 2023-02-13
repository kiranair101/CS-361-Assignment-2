import 'dotenv/config'

const randomCard = async () => {
    const random_card = {'data': []}
    const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php'
    const response = await fetch(url)
    const data = await response.json()
    random_card['data'].push(data)
    console.log(data)
    return random_card
}

const randomDeck = async () => {
    const random_deck = {'data': []}
    for (let i = 1; i <= 50; i++) { 
        const url = 'https://db.ygoprodeck.com/api/v7/randomcard.php'
        const response = await fetch(url)
        const data = await response.json()
        random_deck['data'].push(data)
        console.log(data)
      }
    return random_deck
}

export {randomDeck, randomCard}
