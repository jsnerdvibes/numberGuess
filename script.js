let randomNumber = Math.floor(Math.random() * 20) + 1;
        
if(randomNumber % 2 === 0){
    everan = randomNumber;
} else {
    everan = randomNumber + 1;
}

let ans = everan / 2;

let promptTexts = [
    'Think of a number <br> <span>(a number you can calculate easily)</span>',
    "Double the Number",
    `Add ${everan} to it`,
    "Divide the number by 2",
    "Subtract it by the original number <br> <span>(number you thought of initially)</span>",
    `You have ${ans} left with you <br> <span>(Click Reset if you want to play again)</span>`
];

let currentIndex = 0;

function changeText() {
    if (currentIndex < promptTexts.length) {
        document.getElementById("done").innerHTML = `<strong>DONE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
    
      <div id="glow">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>`;
        document.getElementById("prompt").innerHTML = promptTexts[currentIndex];
        currentIndex++;
    }
}

function resetText() {
    currentIndex = 0;
    document.getElementById("done").innerHTML = "Start";
    document.getElementById("prompt").innerHTML = "Click Start";
    location.reload(); // Reload the page
}