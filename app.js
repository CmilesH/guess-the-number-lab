const game = {
  title: 'Guess the Number!',
  biggestNum: 0,
  biggestCheck: false,
  smallestNum: 0,
  smallestCheck: false,
  secretNum: null,
  getGuess: null,
  state: false,
  prevGuesses: [],
  input: '',
  setup() {

    while ((this.smallestCheck === false) && (this.biggestCheck === false)){
    
      while (this.smallestCheck === false){
      this.smallestNum = parseInt(prompt('Enter the smallest number'), 10)

      if (validNum(this.smallestNum)) {
        alert(`Please enter a valid number`)
      } else this.smallestCheck = true
      }

      while (this.biggestCheck === false){
        this.biggestNum = parseInt(prompt('Enter the biggest number'), 10)

        if (validNum(this.biggestNum)) {
          alert(`Please enter a valid number`)

        } else if (this.biggestNum <= this.smallestNum) {
          alert(`please enter a number greater than ${this.smallestNum}`)

        } else this.biggestCheck = true
      }
    }

    if ((this.smallestCheck === true) && (this.biggestCheck === true)){
      if (window.confirm(`Guessing game between ${this.smallestNum} and ${this.biggestNum} OK? 
      
      Click cancel to choose new numbers.`)){
        game.play()
      } else game.reset() + game.setup()
    }
  },
  render() {
  
      if (this.getGuess > this.secretNum) {
        alert(`That number is too high!
        
        Previous guesses: ${this.prevGuesses}`)
        
        if (this.getGuess < this.biggestNum){
        
          this.biggestNum = this.getGuess
        }
      } else if (this.getGuess < this.secretNum) {
        alert(`That number is too low!
        
        Previous guesses: ${this.prevGuesses}`)
        if (this.getGuess > this.smallestNum){
        
          this.smallestNum = this.getGuess
        }
      }
      else if (this.getGuess === this.secretNum) {
        return alert(`Congrats! you guessed the number in ${this.prevGuesses.length} tries!`)
      }
  },
  play() {

    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      while (this.getGuess != this.secretNum){
        this.getGuess = parseInt(prompt(`I'm thinking of a number between ${this.smallestNum} and ${this.biggestNum}...
        
        Take a guess!`))

        if (validNum(this.getGuess)) {
          ('Please enter a valid number')
        } else {
          this.prevGuesses.push(this.getGuess)
          this.render() 
          }

      }
      
    },
  reset() {
    this.smallestCheck = false
    this.biggestCheck = false
  },
  quit() {
    this.state = false
    game.input = ''
    this.smallestCheck = false
    this.biggestCheck = false
  },
}

function validNum(num) {
  return Object.is(num, NaN)
}

while (game.state === false) {
  game.input = prompt('Welcome to "Guess the Number"! Enter "play" to begin the game!').toLowerCase()
  
  if (game.input === 'play') {
    game.state = true
    game.setup()
  }

}


