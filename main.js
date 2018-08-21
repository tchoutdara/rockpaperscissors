var rock = document.getElementById('rockButton')
var paper = document.getElementById('paperButton')
var scissors = document.getElementById('scissorsButton')
var reset = document.getElementById('resetButton')
var label = document.getElementById('myLabel')
var pcChoice = document.getElementById('compChoice')
var result = document.getElementById('resultLabel')
var winResult = document.getElementById('winLabel')
var lossResult = document.getElementById('lossLabel')
var drawResult = document.getElementById('drawLabel')
var wins = 0
var loss = 0
var draws = 0



rock.addEventListener('click', function() {
    var computerChoice = Math.random()
        if (computerChoice < 0.34) {
            computerChoice = 'Rock'
        } else if(computerChoice <= 0.67) {
            computerChoice = 'Paper'
        } else {
            computerChoice = 'Scissors'
        }

    if(computerChoice == 'Rock'){
        label.innerHTML = 'Rock'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "It is a tie"
        draws += 1
        drawResult.innerHTML = draws 
    } else if(computerChoice == 'Paper'){
        label.innerHTML = 'Rock'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "You Lose"
        loss += 1
        lossResult.innerHTML = loss
    } else {
        label.innerHTML = 'Rock'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "You Win"
        wins += 1
        winResult.innerHTML = wins      
    }
})

paper.addEventListener('click', function() {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'Rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
     if(computerChoice == 'Paper'){
        label.innerHTML = 'Paper'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "It is a tie"
        draws += 1
        drawResult.innerHTML = draws 
    } else if(computerChoice == 'Rock'){
        label.innerHTML = 'Paper'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "You Win"
        wins += 1
        winResult.innerHTML = wins
    } else {
        label.innerHTML = 'Paper'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "You lose"
        loss += 1
        lossResult.innerHTML = loss      
    }
})

scissors.addEventListener('click', function() {
    var computerChoice = Math.random()
    if (computerChoice < 0.34) {
        computerChoice = 'Rock'
    } else if(computerChoice <= 0.67) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
     if(computerChoice == 'Scissors'){
        label.innerHTML = 'Scissors'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "It is a tie"
        draws += 1
        drawResult.innerHTML = draws 
    } else if(computerChoice == 'Rock'){
        label.innerHTML = 'Scissors'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "You lose"
        loss += 1
        lossResult.innerHTML = loss
    } else {
        label.innerHTML = 'Scissors'
        pcChoice.innerHTML = computerChoice
        result.innerHTML = "You lose"
        wins += 1
        winResult.innerHTML = wins      
    }
})

reset.addEventListener('click', function() {
  label.innerHTML = ''
  pcChoice.innerHTML = ''
  result.innerHTML = ''
})

