const game = {
  title: 'Guess the Number!',
  biggestNum: 0,
  biggestCheck: false,
  smallestNum: 0,
  smallestCheck: false,
  secretNum: null,
  getGuess: null,
  state: false,
  player: {
    prevGuesses: [],
    input: '',
  },
  setup: function() {

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
      if (window.confirm(`Guess gaming between ${this.smallestNum} and ${this.biggestNum} OK? Click cancel to choose new numbers.`)){
        game.play()
      } else game.reset() + game.setup()
    }
  },
  play: function() {

    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    

    
  },
  reset: function() {
    this.smallestCheck = false
    this.biggestCheck = false
  },
  quit: function() {
    this.state = false
    game.player.input = ''
    this.smallestCheck = false
    this.biggestCheck = false
  },
}

while (game.state === false) {
  game.player.input = prompt('Welcome to "Guess the Number"! Enter "play" to begin the game!').toLowerCase()
  
  if (game.player.input === 'play') {
    game.state = true
    game.setup()
  }

}
