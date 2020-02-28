const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let firstGame

// Function for creating options
const createOption = (start,end,className) => {
    for(let i=start; i<end; i++) {
        const numb = document.createElement('option')
        numb.value = `${i}`
        numb.classList.add('dropdown')
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

// Klawiatura
const keyLayout = [
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "z", "x", "c", "v", "b", "n", "m"
]

const keyboardKeys = document.createElement('div')
keyboardKeys.classList.add('keyboard__keys')

keyLayout.forEach((key => {
    const keyElement = document.createElement("button");
    const insertLineBreak = ["p", "l"].indexOf(key) !== -1;
    keyElement.setAttribute("type", "button");
    keyElement.classList.add("keyboard__key");
    keyElement.textContent = key
    keyboardKeys.appendChild(keyElement)
    if (insertLineBreak) {
        keyboardKeys.appendChild(document.createElement("br"));
    }
    keyElement.addEventListener("click", (ev) => {
        firstGame.makeGuess(ev.target.textContent)
        render()
        console.log(ev.target.textContent)
    })
}))

document.querySelector('#keyboard-keys').appendChild(keyboardKeys)

// Funkcja do renderowania hasła

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