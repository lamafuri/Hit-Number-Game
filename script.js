let s = 0;
var hit;
let timer;
let t = 60;
let isPaused = false;
createBubble();
getHitNum();

const start = document.getElementById("start");
const resume = document.getElementById("resume");
const pause = document.getElementById("pause");

start.addEventListener("click", () => {
    isPaused = false;
    runTimer();
});
resume.addEventListener("click",()=>{
    isPaused = false;
})
pause.addEventListener("click", () => {
    isPaused = true;
});
let loop = setInterval(() => { //Run scoreManagement() function every 100 millisecond to check the hit 
    scoreManagement();
}, 100);

function createBubble() {
    const main = document.getElementById("main");
    let str = "";
    let randomNum;
    for (let i = 1; i <= 250; i++) {
        randomNum = Math.floor(Math.random() * 10);
        str = str + `<div id="bubble">${randomNum}</div>`
    }
    main.innerHTML = str;
}
function runTimer() {
    timer = setInterval(() => {
        if (!isPaused) { 
            if (t > 0) {
                t--;
                document.getElementById("timer").innerText = t;
            }
            else {
                clearInterval(timer);
                document.getElementById("main").innerHTML ="";//remove all bubbles when time == 0
                gameOver();
            }
        }

    }, 1000);
}
function getHitNum() {
    hit = Math.floor(Math.random() * 10);
    document.getElementById("hit").innerText = hit;
}
function increaseScore() {
    s++;
    document.getElementById("score").innerText = s;
}
function scoreManagement() {
    let bubblesNodeList = document.querySelectorAll("#bubble");
    // console.log(bubblesNodeList);
    bubblesArr = Array.from(bubblesNodeList);
    bubblesArr.forEach(clickedBubble => {
        clickedBubble.addEventListener("click", (event) => {
            // console.log(event.target.innerText)
            if (event.target.innerText == hit && !isPaused) {
                increaseScore();
                getHitNum();
                createBubble();
            }
        })
    });
}
function gameOver() {
    document.getElementById("scoreNum").innerText = s;
    document.getElementById("gameOver").style.display = "flex";
}



