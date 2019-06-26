addItemToList = () => {
    var todoTitle = document.getElementById("todoInput").value;  // catch the bus
    console.log(todoTitle);  //catch the bus

    var li =document.createElement("li");  //li =<li></li>
    var listText= document.createTextNode(todoTitle);  // catch the bus
    console.log(listText);
    li.appendChild(listText); //li =<li> "catch the bus"

    document.getElementById("todo-list-items").appendChild(li);
    document.getElementById("todoInput").value ="";

};


// funcion addItemToList () {
//     alert("Your function worked");
// }