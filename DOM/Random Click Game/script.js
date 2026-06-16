const time = document.querySelector('.time');
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const startBtn = document.querySelector('button');
const container = document.querySelector('.container');
const gameOver = document.querySelector('.gameOver');
const finalHighScore = document.querySelector('#finalHighScore');
const finalScore = document.querySelector('#finalScore');

let initialTime = Number(time.textContent);
let initalScore = Number(score.textContent);
let yPos;
let xPos;
let red;
let green;
let blue;


highscore.textContent = localStorage.getItem('highScore') || 0


startBtn.addEventListener('click', (e) => {

    startBtn.style.cursor = 'not-allowed';
    startBtn.style.backgroundColor = 'rgb(211, 210, 210)';
    startBtn.style.color = 'black'
    startBtn.disabled = true;

    const timerFun = setInterval(() => {

        initialTime--;
        time.textContent = initialTime;
        if (initialTime < 0) {
            clearInterval(timerFun)

            if (initalScore > localStorage.getItem('highScore')) {
                localStorage.setItem('highScore', initalScore);
                highscore.textContent = localStorage.getItem('highScore');
            }

            finalHighScore.textContent = localStorage.getItem('highScore');
            finalScore.textContent = initalScore;
            gameOver.style.display = "inherit"

            setTimeout(() => {
                window.location.reload();
            }, 3000)
        }

        xPos = Math.random() * 90;
        yPos = Math.random() * 90;
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);

        container.innerHTML = `
                         <div class="box" style="top: ${yPos}%; left: ${xPos}%; background-color: rgb(${red},${green},${blue});">
                        </div>
                        `


    }, 1500)

})

container.addEventListener('click', (e) => {

    if (e.target.classList.contains('box')) {
        container.innerHTML = "";
        initalScore++;
        score.textContent = initalScore;
    }
})