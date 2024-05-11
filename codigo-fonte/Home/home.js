document.addEventListener("DOMContentLoaded", function() {
    const circularProgressBar = document.querySelector("#circularProgressBar");
    const circularProgressBarNumber = document.querySelector("#circularProgressBar .progress-value");
    const buttonTypePomodoro = document.querySelector("#buttonTypePomodoro");
    const buttonTypeShortBreak = document.querySelector("#buttonTypeShortBreak");
    const buttonStartTimer = document.querySelector("#buttonStartTimer");

    // Verifica se os elementos foram encontrados antes de continuar
    if (!circularProgressBar || !circularProgressBarNumber || !buttonTypePomodoro || !buttonTypeShortBreak || !buttonStartTimer) {
        console.error("Um ou mais elementos não foram encontrados.");
        return;
    }

    const audio = new Audio('alarme.mp3');

    const pomodoroTimerInSeconds = 1500; 
    const shortBreakTimerInSeconds = 300;
    const TIMER_TYPE_POMODORO = 'POMODORO';
    const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';

    let progressInterval;
    let pomodoroType = TIMER_TYPE_POMODORO;
    let timerValue = pomodoroTimerInSeconds;
    let multiplierFactor = 360 / timerValue;
    let isTimerRunning = false;

    function formatNumberInStringMinute(number){
        const minutes = Math.floor(number / 60).toString().padStart(2, '0');
        const seconds = (number % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    const startTimer = () => {
        if (!isTimerRunning) {
            progressInterval = setInterval(() => {
                timerValue--;
                setInfoCircularProgressBar();
                if (timerValue === 0) {
                    stopTimer();
                    audio.play();
                }
            }, 1000);

            buttonStartTimer.textContent = "Parar"; // Altera o texto do botão para "Parar"
            isTimerRunning = true; // Define que o temporizador está em execução
        }
    }

    const stopTimer = () => {
        clearInterval(progressInterval);
        buttonStartTimer.textContent = "Iniciar"; // Altera o texto do botão de volta para "Iniciar"
        isTimerRunning = false; // Define que o temporizador não está mais em execução
    }

    const resetTimer = () => {
        clearInterval(progressInterval);
        timerValue = (pomodoroType === TIMER_TYPE_POMODORO) ? pomodoroTimerInSeconds : shortBreakTimerInSeconds;
        multiplierFactor = 360 / timerValue;
        setInfoCircularProgressBar();
        stopTimer(); // Para o temporizador ao reiniciar
    }

    function setInfoCircularProgressBar() {
        if (timerValue === 0) {
            stopTimer();
            audio.play();
            return;
        }
        
        circularProgressBarNumber.textContent = formatNumberInStringMinute(timerValue);
        // circularProgressBar.style.background = `conic-gradient(var(--verdeclaro) ${timerValue * multiplierFactor}deg, var(--cinzaFundo) 0deg)`;
    } 

    const setPomodoroType = (type) => {    
        pomodoroType = type; 

        if(type === TIMER_TYPE_POMODORO){
            buttonTypeShortBreak.classList.remove("active");
            buttonTypePomodoro.classList.add("active");                  
        } else {
            buttonTypePomodoro.classList.remove("active");
            buttonTypeShortBreak.classList.add("active"); 
        }

        resetTimer();
    }

    buttonTypePomodoro.addEventListener('click', () => setPomodoroType(TIMER_TYPE_POMODORO));
    buttonTypeShortBreak.addEventListener('click', () => setPomodoroType(TIMER_TYPE_SHORT_BREAK));

    buttonStartTimer.addEventListener('click', () => {
        if (isTimerRunning) {
            stopTimer();
        } else {
            startTimer();
        }
    });
});

const handleCurrentMenu = () => {
    const link = document.getElementById('link');

    link.className = 'menu-active'
}

const handleCanRenderMenuItem = () => {
    const notationLink = document.getElementById('notation');
    const profileLink = document.getElementById('profile');
    const logginButton = document.getElementById('loggin-loggout')
    const home = document.getElementById('home');

    const hasUser = localStorage.getItem('userHasLogged');

    if (!hasUser) {
        home.innerHTML = "<a href='/codigo-fonte/Home/homeSemLogin.html'><i class='bi bi-house'></i>Home</a>"
        profileLink.style.display = 'none';
        notationLink.style.display = 'none';
        logginButton.innerHTML = "<i class='bi bi-box-arrow-right'></i>Login</a>";
    }
}

handleCurrentMenu()
handleCanRenderMenuItem()