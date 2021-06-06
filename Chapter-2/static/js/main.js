// alert('Hello World');
 
function ageIndays()
{
    var age = prompt("What is your birth year..?");
    var daysAge = (2021-age)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are "+daysAge+" days old");
    h1.setAttribute('id', 'prompt_result');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('prompt_result').remove();
}

function generatePhoto()
{
    var img = document.createElement('img');
    img.src = "static/images/index.jpg";
    img.setAttribute('id', 'image-cat');
    document.getElementById('flex-box-photo').appendChild(img)
}
function decideWinner(humanChoice, botChoice)
{
    result = {
        "rock":{"rock":0.5,"paper":0, "scissor":1 },
        "paper":{"rock":0,"paper":0.5, "scissor":0},
        "scissor":{"rock":0,"paper":1, "scissor":0.5}
    };

    var r1 = result[humanChoice][botChoice];
    var r2 = result[botChoice][humanChoice];
    return [r1, r2];
}
function getmessage(result)
{
    if(result[0] == 0)
        return {"message":"You Lost :(", "color":"red"};
    else if (result[0] == 0.5)
        return {"message":"You Tied :)", "color":"yellow"};
    else
    return {"message":"You Won!", "color":"green"};
}
function rpsGame(yourChoice)
{
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = ["rock", "paper", "scissor"][Math.floor(Math.random()*3)];
    console.log(botChoice);
    result = decideWinner(humanChoice, botChoice);
    var msg = getmessage(result);
    rpsfrontend(humanChoice, botChoice, msg);

}

function rpsfrontend(humanChoice, botChoice, message)
{
    var imageDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissor": document.getElementById("scissor").src
    };
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    var humanDiv = document.createElement('div');
    var msgDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    // Human Div

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,53,223,1)'/>";
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);

    msgDiv.innerHTML = "<h1 style='color:"+message["color"] +"; font-size:60px; padding:30px' >"+ message["message"]+"</h1>";
    document.getElementById("flex-box-rps-div").appendChild(msgDiv);

    botDiv.innerHTML = "<img src='" + imageDatabase[botChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'/>";
    document.getElementById("flex-box-rps-div").appendChild(botDiv);


}

var allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
var buttonArray = [];

for(let btn=0; btn<allButtons.length; btn++)
{
    buttonArray.push(allButtons[btn].classList[1]);
}

function changebuttoncolor(choice)
{
    console.log(choice.value);
    if(choice.value == "red")
    {
        setRedButton();
    }
    else if(choice.value == 'green')
    {
        setGreenButton();
    }
    else if(choice.value == 'random')
    {
        setRandomButton();
    }
    else
    {
        setResetButton();
    }

}

function setRedButton()
{
    // var tempArray = buttonArray;
    for(let btn=0; btn<allButtons.length; btn++)
    {
        allButtons[btn].classList.remove(allButtons[btn].classList[1]);
        allButtons[btn].classList.add('btn-danger');
    }
}

function setGreenButton()
{
    for(let btn=0; btn<allButtons.length; btn++)
    {
        allButtons[btn].classList.remove(allButtons[btn].classList[1]);
        allButtons[btn].classList.add('btn-success');
    }
}

function setResetButton()
{
    for(let btn=0; btn<allButtons.length; btn++)
    {
        allButtons[btn].classList.remove(allButtons[btn].classList[1]);
        allButtons[btn].classList.add(buttonArray[btn]);
    }
}
function setRandomButton()
{
    var choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for(let btn=0; btn<allButtons.length; btn++)
    {
        allButtons[btn].classList.remove(allButtons[btn].classList[1]);
        var random = Math.floor(Math.random()*4);
        allButtons[btn].classList.add(choice[random]);
    }
}