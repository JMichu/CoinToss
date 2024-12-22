//function to determine the coin state
function determineCoinState(){
   last_result.innerText = coinState[Math.floor(Math.random()* 2)];
   coin.innerText = last_result.innerText;
}

//function to update the coin state
function updateCoinState(){
    if(last_result.innerText === "HEAD"){
        headCount++;
        headsDisplay.innerText = headCount;
    }
    else{
        tailCount++;
        tailsDisplay.innerText = tailCount;
    }
}

let coinState = ["HEAD","TAIL"]
let headCount = 0;
let tailCount = 0;
const coin = document.getElementById('coin');

const headsDisplay = document.getElementById('heads-count');
const tailsDisplay = document.getElementById('tails-count');

//display the last result
const last_result = document.getElementById('last-result-value');



// Flip button event listener
const button = document.getElementById('flip-button');
button.addEventListener('click', () => {
    console.log("Button clicked");

    // Animation for the coin
    const coin = document.getElementById('coin');
    coin.classList.add('flip');

    // Update the coin state and counters after the animation ends
    setTimeout(() => {
        determineCoinState(); // Update the result on the coin
        updateCoinState(); // Update the counters
        coin.classList.remove('flip'); // Remove the animation class
    }, 1000);
});


