class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle () {
        this._puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                this._puzzle += letter
            } else {
                this._puzzle += '*'
            }
        })
        return this._puzzle 
    }
    makeGuess(guess) {
        if (this.status === 'playing') {
            guess = guess.toLowerCase()
            if (!this.guessedLetters.includes(guess)) {
                this.guessedLetters.push(guess)
                if (!this.word.includes(guess)) {
                    this.remainingGuesses -= 1
                }
            }
            this.statusUpdate()
        }
    }
    statusUpdate() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        

        if (this.remainingGuesses<=0) {
            this.status = 'failed'
        } else if (finished === true) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return `Great work. You guessed the word.`
        }
    }
}