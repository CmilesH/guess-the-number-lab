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

      if (Object.is(this.smallestNum, NaN)) {
        alert(`Please enter a valid number`)
      } else this.smallestCheck = true
      }

      while (this.biggestCheck === false){
        this.biggestNum = parseInt(prompt('Enter the biggest number'), 10)

        if (Object.is(this.biggestNum, NaN)) {
          alert(`Please enter a valid number`)

        } else if (this.biggestNum <= this.smallestNum) {
          alert(`please enter a number greater than ${this.smallestNum}`)

        } else this.biggestCheck = true
      }
    }

    if ((this.smallestCheck === true) && (this.biggestCheck === true)){
      if (window.confirm(`Guess gaming between ${this.smallestNum} and ${this.biggestNum} OK? 
      
      Click cancel to choose new numbers.`)){
        game.play()
      } else game.reset() + game.setup()
    }
  },
  render() {

    while (this.getGuess != this.secretNum){
      this.getGuess = prompt(`I'm thinking of a number between ${smallestNum} and ${biggestNum}...
      
      Take a guess!`)
  
      if (this.getGuess > this.secretNum) {
        alert('That number is too high!')
      
      } else if (this.getGuess < this.secretNum) {
        alert('That number is too low!')
      }
  }
  },
  play() {

    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    

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

while (game.state === false) {
  game.input = prompt('Welcome to "Guess the Number"! Enter "play" to begin the game!').toLowerCase()
  
  if (gameinput === 'play') {
    game.state = true
    game.setup()
  }

}
