let completedTasks = 0;

function addTask(){

    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if(input.value.trim() === ""){
        return;
    }

    const li = document.createElement("li");

    li.textContent = input.value;

    li.addEventListener("click", function(){

        if(!li.classList.contains("completed")){
            li.classList.add("completed");

            completedTasks++;

            document.getElementById("completed").textContent = completedTasks;
        }

    });

    taskList.appendChild(li);

    input.value = "";
}