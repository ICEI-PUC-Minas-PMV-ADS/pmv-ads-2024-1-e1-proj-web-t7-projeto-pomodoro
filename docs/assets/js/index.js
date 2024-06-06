document.addEventListener("DOMContentLoaded", function () {
  const btnPomodoroClock = document.getElementById("btnPomodoroClock");
  const btnShortBreakClock = document.getElementById("btnShortBreakClock");
  const btnClock = document.getElementById("btnClock");
  const clockTime = document.getElementById("clockTime");
  const pomodoroCountBtn = document.getElementById("pomodoroCount");

  //   const audio = new Audio("alarme.mp3");

  const pomodoroTimerInSeconds = 1;
  const shortBreakTimerInSeconds = 1;
  const TIMER_TYPE_POMODORO = "POMODORO";
  const TIMER_TYPE_SHORT_BREAK = "SHORTBREAK";

  let progressInterval;
  let pomodoroType = TIMER_TYPE_POMODORO;
  let timerValue = pomodoroTimerInSeconds;
  let multiplierFactor = 360 / timerValue;
  let isTimerRunning = false;

  function formatNumberInStringMinute(number) {
    const minutes = Math.floor(number / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (number % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  const startTimer = () => {
    if (!isTimerRunning) {
      progressInterval = setInterval(() => {
        timerValue--;
        if (timerValue == 0) {
          const nextType =
            pomodoroType == "POMODORO"
              ? TIMER_TYPE_SHORT_BREAK
              : TIMER_TYPE_POMODORO;

          if (pomodoroType == "SHORTBREAK") {
            handleStorePomodoroCount();
          }

          handleChangeClockType(nextType);
          stopTimer();
        }

        setClockTimerInfo();
      }, 1000);

      btnClock.textContent = "Parar"; // Altera o texto do botão para "Parar"
      btnClock.classList.remove("clock-footer-btn-active");
      isTimerRunning = true; // Define que o temporizador está em execução
    }
  };

  const stopTimer = () => {
    clearInterval(progressInterval);
    btnClock.classList.add("clock-footer-btn-active");
    btnClock.textContent = "Iniciar"; // Altera o texto do botão de volta para "Iniciar"
    isTimerRunning = false; // Define que o temporizador não está mais em execução
  };

  const resetTimer = () => {
    clearInterval(progressInterval);
    timerValue =
      pomodoroType == TIMER_TYPE_POMODORO
        ? pomodoroTimerInSeconds
        : shortBreakTimerInSeconds;

    multiplierFactor = 360 / timerValue;

    setClockTimerInfo();
    stopTimer(); // Para o temporizador ao reiniciar
  };

  const handleStorePomodoroCount = () => {
    const hasUser = localStorage.getItem("userHasLogged");

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    let activeTask = tasks?.find((task) => task?.active);

    if (activeTask) {
      const noActiveTasks = tasks?.filter((task) => !task?.active);

      if (activeTask?.taskPomodoro == Number(activeTask?.taskPomodoroQtd)) {
        activeTask = {
          ...activeTask,
          active: false,
          finished: true,
        };

        localStorage.setItem("pomodoroCount", 1);
      } else if (
        activeTask?.taskPomodoro + 1 ==
        Number(activeTask?.taskPomodoroQtd)
      ) {
        activeTask = {
          ...activeTask,
          active: false,
          finished: true,
        };

        localStorage.setItem("pomodoroCount", 1);
      } else {
        activeTask = {
          ...activeTask,
          taskPomodoro: activeTask?.taskPomodoro + 1,
        };

        localStorage.setItem("pomodoroCount", activeTask?.taskPomodoro);
      }

      noActiveTasks?.push(activeTask);

      localStorage.setItem("tasks", JSON.stringify(noActiveTasks));

      handleGenerateTasks();
    }

    let pomodoroCount = localStorage.getItem("pomodoroCount");

    if (!pomodoroCount) {
      pomodoroCount = 2;
      localStorage.setItem("pomodoroCount", pomodoroCount);
    } else {
      pomodoroCount++;

      localStorage.setItem("pomodoroCount", pomodoroCount);
    }

    pomodoroCountBtn.innerHTML = `#${pomodoroCount}`;
  };

  const setDocumentTitleInfo = () => {
    let title = `${formatNumberInStringMinute(timerValue)}`;

    if (pomodoroType == "POMODORO") {
      title += " - Hora de focar!";
    } else {
      title += " - Hora de descanso!";
    }

    window.document.title = title;
  };

  const setClockTimerInfo = () => {
    if (timerValue === 0) {
      stopTimer();
      return;
    }

    setDocumentTitleInfo();

    clockTime.textContent = formatNumberInStringMinute(timerValue);
  };

  /**
   * Troca o tipo do relogio de acordo com o botao clicado
   */
  const handleChangeClockType = (type) => {
    pomodoroType = type;

    if (type === TIMER_TYPE_POMODORO) {
      btnPomodoroClock.classList.add("clock-header-btn-active");
      btnShortBreakClock.classList.remove("clock-header-btn-active");
    } else {
      btnShortBreakClock.classList.add("clock-header-btn-active");
      btnPomodoroClock.classList.remove("clock-header-btn-active");
    }

    resetTimer();
  };

  pomodoroCountBtn.addEventListener("click", () => {
    const resetCounter = window.confirm(
      "Deseja realmente reiniciar o contador?"
    );

    if (resetCounter) {
      localStorage.setItem("pomodoroCount", 1);
      pomodoroCountBtn.innerHTML = `#1`;
    }
  });

  btnPomodoroClock.addEventListener("click", () =>
    handleChangeClockType(TIMER_TYPE_POMODORO)
  );

  btnShortBreakClock.addEventListener("click", () =>
    handleChangeClockType(TIMER_TYPE_SHORT_BREAK)
  );

  btnClock.addEventListener("click", () => {
    if (isTimerRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  });
});

const handleCurrentMenu = () => {
  const link = document.getElementById("link");

  link.className = "menu-active";
};

const handleCanRenderMenuItem = () => {
  const notationLink = document.getElementById("notation");
  const logginButton = document.getElementById("loggin-loggout");
  const home = document.getElementById("home");

  const hasUser = localStorage.getItem("userHasLogged");

  if (!hasUser) {
    home.innerHTML =
      "<a href='Home/homeSemLogin.html'><i class='bi bi-house'></i>Home</a>";
    notationLink.style.display = "none";
    logginButton.innerHTML = "<i class='bi bi-box-arrow-right'></i>Login</a>";
  }
};

handleCurrentMenu();
handleCanRenderMenuItem();
