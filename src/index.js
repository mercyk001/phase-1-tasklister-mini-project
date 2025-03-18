document.addEventListener("DOMContentLoaded", () => {
    // your code here
  const taskForm = document.getElementById("create-task-form");
  
    taskForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const newTaskDescription = document.getElementById("new-task-description").value;
     const taskPriority = document.getElementById("task-priority").value;
      
     
      const newTaskItem = document.createElement("li");
      newTaskItem.textContent = newTaskDescription;
  
  
     // if (taskPriority === "high") {
       //   newTaskItem.style.color ="red";
      //} else if (taskPriority === "medium") {
        //  newTaskItem.style.color = "blue";
      //} else if (taskPriority ==="low") {
        //  newTaskItem.style.color = "black";
      //}
  
  
      switch (taskPriority) {
        case "high":
          newTaskItem.style.color ="red";
          break;
          case "medium":
            newTaskItem.style.color = "blue";
            break;
            case"low":
            newTaskItem.style.color ="black";
            break;
  
            default:
              break;
      }
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
          newTaskItem.remove();
      })
  
      newTaskItem.appendChild(deleteButton);
  
      const tasksList = document.getElementById("tasks");
      tasksList.appendChild(newTaskItem);
  
      taskForm.reset();
    });
  
  
  });
  
  