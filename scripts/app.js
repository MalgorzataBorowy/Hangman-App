const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let firstGame

window.addEventListener('keypress',(ev) => {
    firstGame.makeGuess(ev.key)
    // firstGame.statusUpdate()
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = firstGame.statusMessage
    firstGame.puzzle.split('').forEach((letter) => {
        const letterElem = document.createElement('span')
        letterElem.textContent = letter
        puzzleEl.appendChild(letterElem)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('5')
    firstGame = new Hangman(puzzle, 8)
    render()
}

startGame()

document.querySelector('#reset').addEventListener('click', startGame)

// getPuzzle('3').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

// getCountry('DE').then((countryName) => {
//     console.log(countryName)
// }).catch((err) => {
//     console.log(err)
// })

// getCurrentCountry().then((country) => {
//     console.log(`You are in ${country}.`)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     return getCountry(location.country)
// }).then((countryName) => {
//     console.log(`You are in ${countryName}`)
// }).catch((err) => {
//     console.log(err)
// })