var rock = document.getElementById('rockButton')
var paper = document.getElementById('paperButton')
var scissors = document.getElementById('scissorsButton')
var label = document.getElementById('myLabel')
var result = document.getElementById('resultLabel')


rock.addEventListener('click', function() {
       
    if (computerChoice === 'Rock'){
       label.innerHTML = 'Rock'
        result.innerHTML = "It is a tie"
    }


})

paper.addEventListener('click', function() {
    label.innerHTML = 'Paper'
    pcChoice.innerHTML = computerChoice
})

scissors.addEventListener('click', function() {
    label.innerHTML = 'Scissors'
    pcChoice.innerHTML = computerChoice
})

 var computerChoice = Math.random();
        if (computerChoice > 0) {
            computerChoice = "Rock"
        } else if(computerChoice <= 0.67) {
            computerChoice = "Paper"
        } else {
            computerChoice = "Scissors"
        }

    function myFunction(label, pcChoice) {
      return alert(label, pcChoice)
    }

