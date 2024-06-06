const handleGenerateTasks = () => {
  const taskContainer = document.getElementById("taskContainer");

  taskContainer.innerHTML = "";

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const tasksNotFinalized = tasks?.filter((task) => !task?.finished);

  tasksNotFinalized?.map((task, index) => {
    if (task?.finished) return;

    const taskCard = document.createElement("div");
    taskCard.className = "task-card";
    taskCard.onclick = function () {
      handleActiveTask(task?.id);
    };

    if (task?.active) {
      taskCard.classList.add("task-card-active");
    }

    const taskCardTitle = document.createElement("div");
    taskCardTitle.className = "task-card-title";
    taskCardTitle.textContent = task?.taskName;

    const taskCardDetails = document.createElement("div");
    taskCardDetails.className = "task-card-details";

    const taskCardDetailsPomos = document.createElement("div");
    taskCardDetailsPomos.className = "task-card-details-pomos";
    taskCardDetailsPomos.textContent = `${task?.taskPomodoro}/${task?.taskPomodoroQtd}`;

    taskCardDetails.appendChild(taskCardDetailsPomos);
    taskCard.appendChild(taskCardTitle);
    taskCard.appendChild(taskCardDetails);

    taskContainer.insertBefore(taskCard, taskContainer.firstChild);
  });
};

const handleActiveTask = (id) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  let currentActiveTask = tasks?.find((task) => task?.active);
  let taskToActive = tasks?.find((task) => task?.id == id);

  if (!currentActiveTask) {
    const tasksCleared = tasks?.filter((task) => task?.id != id);

    taskToActive = {
      ...taskToActive,
      active: true,
    };

    tasksCleared?.push(taskToActive);

    localStorage.setItem("tasks", JSON.stringify(tasksCleared));

    return handleGenerateTasks();
  }

  if (taskToActive?.id == currentActiveTask?.id) {
    const tasksCleared = tasks?.filter((task) => task?.id != id);

    currentActiveTask = {
      ...currentActiveTask,
      active: false,
    };

    tasksCleared?.push(currentActiveTask);

    localStorage.setItem("tasks", JSON.stringify(tasksCleared));
  } else {
    const tasksCleared = tasks?.filter(
      (task) => task?.id != id && !task?.active
    );

    currentActiveTask = {
      ...currentActiveTask,
      active: false,
    };

    taskToActive = {
      ...taskToActive,
      active: true,
    };

    tasksCleared?.push(currentActiveTask);
    tasksCleared?.push(taskToActive);

    localStorage.setItem("tasks", JSON.stringify(tasksCleared));
  }

  handleGenerateTasks();
};

const handleSubmitTask = (e) => {
  e.preventDefault();

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const taskActive = tasks?.filter((task) => task?.active);

  const form = e.target;
  const formData = new FormData(form);

  let newTask = {
    id: tasks?.length + 1,
    taskName: "",
    taskPomodoroQtd: 1,
    taskPomodoro: 0,
    finished: false,
    active: taskActive?.length ? false : true,
  };

  for (const [key, value] of formData.entries()) {
    newTask = {
      ...newTask,
      [key]: value,
    };
  }

  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  form.reset();
  handleCancelTask();
  handleGenerateTasks();
};

const handleCreateTask = () => {
  const btnAddTask = document.getElementById("btnAddTask");
  const formToCreateTask = document.getElementById("formToCreateTask");

  btnAddTask.style.display = "none";
  formToCreateTask.style.display = "flex";
};

const handleCancelTask = () => {
  const btnAddTask = document.getElementById("btnAddTask");
  const formToCreateTask = document.getElementById("formToCreateTask");

  btnAddTask.style.display = "flex";
  formToCreateTask.style.display = "none";
};

handleGenerateTasks();
