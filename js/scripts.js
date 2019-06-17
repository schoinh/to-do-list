function ToDoList() {
  this.tasks = [],
  this.currentId = -1
}
ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}
function Task (taskName) {
  this.taskName = taskName;
}
var toDoList = new ToDoList();


$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var newTask = new Task ($("input#task").val());
    toDoList.addTask(newTask);

    $(".list").append("<li>"+newTask.taskName+"</li>");

    $("li").click(function() {
      $(this).addClass("strikethrough")
      $(".strikethrough").click(function() {
        $(this).remove();
      })
    })
    $("form")[0].reset();

  })

});
