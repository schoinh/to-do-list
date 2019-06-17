function ToDoList() {
  this.tasks = [],
  this.currentId = -1
}
ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId
}
ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task)
}
function Task (taskName, priority) {
  this.taskName = taskName,
  this.priority = priority
}
var toDoList = new ToDoList();


$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var newTask = new Task ($("input#task").val(), $("input:radio[name=priority]:checked").val());
    toDoList.addTask(newTask);
    if (newTask.priority == "high") {
      $(".high").append("<li>"+newTask.taskName+"</li>");
    } else if (newTask.priority == "medium") {
      $(".med").append("<li>"+newTask.taskName+"</li>");
    } else {
      $(".low").append("<li>"+newTask.taskName+"</li>");
    }

    $("li").click(function() {
      $(this).addClass("strikethrough")
      $(".strikethrough").click(function() {
        $(this).remove();
      })
    })
    $("form")[0].reset();

  })

});
