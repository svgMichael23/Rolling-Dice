
document.addEventListener('DOMContentLoaded',function(){
var isLoading = false;
var runningInterval;
var dieCounter = {
    main:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0};
var dice = document.getElementById('dice-image');
var startButton = document.getElementById('start-button');
var stopButton = document.getElementById('stop-button');
var counterDiv = document.getElementById('counter-display');

function showRandomDie(){
    var options = ['face-one.png','face-two.png','face-three.png','face-four.png','face-five.png','face-six.png'];
    var random = Math.floor(Math.random() * 6) + 1;
    dieCounter[random]++;
    var text = '<p>Face '
    switch (random){
        case 1: 
            text += 'One ';
            break;
        case 2: 
            text += 'Two ';
            break;
        case 3: 
            text += 'Three ';
            break;
        case 4: 
            text += 'Four ';
            break;
        case 5: 
            text += 'Five ';
            break;
        case 6: 
            text += 'Six ';
            break;

    }
    text += 'has been rolled '+ dieCounter[random] + ' times</p>';
    counterDiv.innerHTML += text;
    dice.src = './' + options[parseInt(random) -1 ];
}

startButton.addEventListener('click',function(){
    isLoading = true;
    dieCounter.main++;
    counterDiv.innerHTML += '<p>The Dice has been rolled '+ dieCounter.main+' times</p>';
    //starting an interval to display a new die after every 2 seconds
    runningInterval =  setInterval(function(){
            if(isLoading) showRandomDie();
    }, 2000)
})

stopButton.addEventListener('click',function(){
    isLoading = false;
    if(runningInterval) clearInterval(runningInterval);
    dice.src = './face-unknown.png';
})






})