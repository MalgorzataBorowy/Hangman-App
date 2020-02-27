const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let firstGame

// Function for creating options
const createOption = (start,end,className) => {
    for(let i=start; i<end; i++) {
        const numb = document.createElement('option')
        numb.value = `${i}`
        numb.class = 'option-number'
        numb.textContent = `${i}`
        document.querySelector(className).appendChild(numb)
    }
}

// Creating option for selector- words number
createOption(1,10,'#word-number')
let wordsNumber = 1

document.querySelector('#word-number').addEventListener('change',(ev) => {
    wordsNumber = ev.target.value 
})

// Creating option for selector- mistakes numb
createOption(3,11,'#mistakes-number')
let mistakes = 3

document.querySelector('#mistakes-number').addEventListener('change',(ev) => {
    mistakes = ev.target.value 
})


window.addEventListener('keypress',(ev) => {
    firstGame.makeGuess(ev.key)
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
    const puzzle = await getPuzzle(wordsNumber)
    firstGame = new Hangman(puzzle, mistakes)
    render()
}

startGame()

document.querySelector('#reset').addEventListener('click', startGame)