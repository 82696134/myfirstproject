function init()    {
  var addbutton = document.getElementById("add-Button");
  addbutton.addEventListener("click",additems);
  function additems(){
   var itemtext = todoentrybox.value;
   newtodoitem(itemtext,false);
  }
  var clearbutton = document.getElementById("two");
  clearbutton.addEventListener("click",controlclearbutton);
  function controlclearbutton(){
  var completeitems = todolist.getElementsByClassName("completed");
  while(completeitems.length > 0){
    completeitems.item(0).remove();
  }
  }
  var emptybutton = document.getElementById("three");
  emptybutton.addEventListener("click",controlemptybutton);
  function controlemptybutton(){
   var todoitem = todolist.children;
   while(todoitem.length > 0){
     todoitem.item(0).remove();
   }
  }
  var savebutton = document.getElementById("four");
  savebutton.addEventListener("click",controlsavebutton);
  function controlsavebutton(){
    alert("your file has been saved");
  }
  var todoentrybox = document.getElementById("todo-entry-box");
  var todolist = document.getElementById("todo-list");
  function newtodoitem(itemtext,completed){
    var todoitem = document.createElement("li");
    var todonext = document.createTextNode(itemtext);
    todoitem.appendChild(todonext);
    if (completed){
      todoitem.classList.add("completed");
    }
    todolist.appendChild(todoitem);
    todoitem.addEventListener("dblclick", toggletodoitemstate);
  }
  function toggletodoitemstate (){
    if(this.classList.contains("completed")){
      this.classList.remove("completed");
    }
      else{  this.classList.add("completed");
      }
  }

}
