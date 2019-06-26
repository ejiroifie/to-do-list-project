addItemToList = () => {
    var todoTitle = document.getElementById("todoInput").value;
    console.log(todoTitle);

    var li =document.createElement("li");
    var listText= document.createTextNode(todoTitle);
    console.log(listText);
    li.appendChild(listText);

};








// funcion addItemToList () {
//     alert("Your function worked");
// }