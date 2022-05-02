let humanScore = 0, botScore = 0

const SoundWin = new Audio('bgmusic/win.wav');
const SoundLose = new Audio('bgmusic/lose.wav');
const SoundDraw = new Audio('bgmusic/draw.wav');
const SoundClick = new Audio('bgmusic/click.wav');
const SoundError = new Audio('bgmusic/error.wav');

function playlogic(userChoice){
    console.log(userChoice.id)
    var choice = ['bato', 'papel', 'gunting']
    var humanChoice, botChoice, resultColor

    humanChoice = userChoice.id
    botChoice = choice[Math.floor(Math.random()*3)]
    console.log(humanChoice + ' vs. ' + botChoice)

    if(humanChoice === choice[0]){
        if(botChoice === choice[1]){
            result = 'YOU LOSE!'
            botScore += 1
        }else if(botChoice ===  choice[0]){
            result = 'Draw!'
        }else{
            result = 'YOU WIN!'
            humanScore += 1
        }
    }else if(humanChoice === choice[1]){
        if(botChoice === choice[2]){
            result = 'YOU LOSE!'
            botScore += 1
        }else if(botChoice === choice[1]){
            result = 'Draw!'
        }else{
            result = 'You Win!'
            humanScore += 1
        }
    }else{
        if(botChoice === choice[0]){
            result = 'YOU LOSE!'
            botScore += 1
        }else if(botChoice === choice[2]){
            result = 'Draw!'
        }else{
            result = 'You Win!'
            humanScore += 1
        }
    }console.log(result + "skor: " + humanScore + ", botSkor: " + botScore)

    if(result == 'You Win!'){
        resultColor = 'green'
        SoundWin.play()
    }
    else if(result == 'Draw!'){
        resultColor = 'yellow'
        SoundDraw.play()
    }
    else{
        resultColor  = 'red'
        SoundLose.play()
    }

    var humanPick, botPick
    humanPick = document.getElementById(humanChoice).src
    botPick = document.getElementById(botChoice).src

    document.getElementById(choice[0]).remove()
    document.getElementById(choice[1]).remove()
    document.getElementById(choice[2]).remove()
    //Display the logic (FrontEnd)
    var humanImage = document.createElement('img')
    humanImage.setAttribute('src' , humanPick)
    humanImage.setAttribute('id' , "humanPick")
    humanImage.setAttribute('onclick' , "clickError()")

    var botImage = document.createElement('img')
    botImage.setAttribute('src' , botPick)
    botImage.setAttribute('id' , "botPick")
    botImage.setAttribute('onclick' , "clickError()")

    var text = document.createElement('h1')
    text.setAttribute('style' , 'color:'+resultColor+'; text-shadow: 0 0 0px white, 0 0 2px white;')
    text.setAttribute('id' , 'text-res')
    text.innerHTML = result

    document.getElementsByClassName('bbpDiv')[0].appendChild(humanImage)
    document.getElementsByClassName('bbpDiv')[1].appendChild(text)
    document.getElementsByClassName('bbpDiv')[2].appendChild(botImage)
    document.getElementById('mmove').style.display = "none"
    document.getElementsByClassName('gbutt')[0].style.display = "inline"
    document.getElementsByClassName('gbutt')[1].style.display = "inline"
    document.getElementById("skor1").textContent = humanScore
    document.getElementById("skor2").textContent = botScore
}

function playAgain(){
    SoundClick.play()
    document.getElementById('humanPick').remove()
    document.getElementById('botPick').remove()
    document.getElementById('text-res').remove()

    var choiceImage1 = document.createElement('img')
    choiceImage1.setAttribute('src' , 'img/rock.png')
    choiceImage1.setAttribute('id' , 'bato')
    choiceImage1.setAttribute('onclick' , 'playlogic(this)')

    var choiceImage2 = document.createElement('img')
    choiceImage2.setAttribute('src' , 'img/paper.png')
    choiceImage2.setAttribute('id' , 'papel')
    choiceImage2.setAttribute('onclick' , 'playlogic(this)')

    var choiceImage3 = document.createElement('img')
    choiceImage3.setAttribute('src' , 'img/scissor.png')
    choiceImage3.setAttribute('id' , 'gunting')
    choiceImage3.setAttribute('onclick' , 'playlogic(this)')

    document.getElementsByClassName('bbpDiv')[0].appendChild(choiceImage1)
    document.getElementsByClassName('bbpDiv')[1].appendChild(choiceImage2)
    document.getElementsByClassName('bbpDiv')[2].appendChild(choiceImage3)

    document.getElementById('mmove').style.display = "inline"
    document.getElementsByClassName('gbutt')[0].style.display = "none"
    document.getElementsByClassName('gbutt')[1].style.display = "none"
}

function resetGame(){
    SoundClick.play()
    document.getElementById('humanPick').remove()
    document.getElementById('botPick').remove()
    document.getElementById('text-res').remove()

    var choiceImage1 = document.createElement('img')
    choiceImage1.setAttribute('src' , 'img/rock.png')
    choiceImage1.setAttribute('id' , 'bato')
    choiceImage1.setAttribute('onclick' , 'playlogic(this)')

    var choiceImage2 = document.createElement('img')
    choiceImage2.setAttribute('src' , 'img/paper.png')
    choiceImage2.setAttribute('id' , 'papel')
    choiceImage2.setAttribute('onclick' , 'playlogic(this)')

    var choiceImage3 = document.createElement('img')
    choiceImage3.setAttribute('src' , 'img/scissor.png')
    choiceImage3.setAttribute('id' , 'gunting')
    choiceImage3.setAttribute('onclick' , 'playlogic(this)')

    document.getElementsByClassName('bbpDiv')[0].appendChild(choiceImage1)
    document.getElementsByClassName('bbpDiv')[1].appendChild(choiceImage2)
    document.getElementsByClassName('bbpDiv')[2].appendChild(choiceImage3)

    document.getElementById('mmove').style.display = "inline"
    document.getElementsByClassName('gbutt')[0].style.display = "none"
    document.getElementsByClassName('gbutt')[1].style.display = "none"

    humanScore = 0
    botScore = 0

    document.getElementById("skor1").textContent = humanScore
    document.getElementById("skor2").textContent = botScore
}

function clickError(){
    SoundError.play()
}