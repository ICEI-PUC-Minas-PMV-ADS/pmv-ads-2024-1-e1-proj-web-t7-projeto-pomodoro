const formatNumberInStringMinute = (number) => {
  const minutes = Math.floor(number / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (number % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const handleGenerateTasks = (status = "") => {
  const taskContainer = document.getElementById("tasksContainer");

  taskContainer.innerHTML = '';

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (status == "false") {
    tasks = tasks?.filter((task) => task?.finished == false);
  }

  if (status == "true") {
    tasks = tasks?.filter((task) => task?.finished == true);
  }

  tasks?.map((task) => {
    const notationCard = document.createElement("div");
    notationCard.className = "notation-card";

    const notationCardTitle = document.createElement("div");
    notationCardTitle.className = "notation-card-title";
    notationCardTitle.textContent = task?.taskName;

    const notationCardContent = document.createElement("div");
    notationCardContent.className = "notation-card-content";
    notationCardContent.textContent = `${
      task?.finished
        ? "Finalizada"
        : `Pendente - Restam -  ${formatNumberInStringMinute(
            Number(task?.taskPomodoroQtd) * 1500
          )}`
    } `;

    const notationCardFooter = document.createElement("div");
    notationCardFooter.className = "notation-card-footer";

    const notationCardFooterStatistic = document.createElement("div");
    notationCardFooterStatistic.className = "notation-card-footer-statistic";

    const hourglassIcon = document.createElement("i");
    hourglassIcon.className = "bi bi-hourglass-split";
    notationCardFooterStatistic.appendChild(hourglassIcon);

    notationCardFooterStatistic.appendChild(
      document.createTextNode(
        formatNumberInStringMinute(Number(task?.taskPomodoroQtd) * 1500)
      )
    );

    // Monta a estrutura do cartão de notação
    notationCardFooter.appendChild(notationCardFooterStatistic);
    notationCard.appendChild(notationCardTitle);
    notationCard.appendChild(notationCardContent);
    notationCard.appendChild(notationCardFooter);

    // Adiciona o cartão de notação como o primeiro filho do container
    taskContainer.insertBefore(notationCard, taskContainer.firstChild);
  });
};

handleGenerateTasks();
