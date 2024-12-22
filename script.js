
function determineCoinState(){
   last_result.innerText = coinState[Math.floor(Math.random()* 2)]
}

let coinState = ["HEAD","TAIL"]
let headCount = 0;
let tailCount = 0;

const headsDisplay = document.getElementById('heads-count');
const tailsDisplay = document.getElementById('tails-count');

// obsługa wyświetlania ostatniego wyniku
const last_result = document.getElementById('last-result-value');


//obsługa przycisku
const button = document.getElementById('flip-button');
button.addEventListener('click', () => {
    console.log("Button clicked");
    determineCoinState();
});
