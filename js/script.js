
// function when add button gets clicked

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

//Add Event listener for done items
//var list=document.getElementById("todo-list-items");

// showing cordinates where user clicked on page 
document.addEventListener (
    "click", 
    function (ev)  {

        // variables to get x and y cordinates
    var xCordinate =ev.x;
    var yCordinate =ev.y;

    //creating text nodes with those cordinates as values
    var xText= document.createTextNode(xCordinate);
    var yText= document.createTextNode(yCordinate);

    //text in paragraph to let users know about x and y cordinate
    var currentXCordinateText =document.createTextNode  (
        " Your current X cordinate: "
    );


    var currentYCordinateText =document.createTextNode  (
        " Your current Y cordinate: "
    );

    // creating paragraph element for x cordinate
    var p =document.createElement("p");
    p.appendChild(currentXCordinateText);
    p.appendChild(xText);

    //appending paragraph to correct div element
    document.getElementById ("current-cordinates").appendChild(p);

    // creating paragraph element for y cordinate
    var p =document.createElement("p");
    p.appendChild(currentYCordinateText);
    p.appendChild(yText);

    // appending paragraph to correct div element
    document.getElementById ("current-cordinates").appendChild(p);
    },
    false
);
    // alert(xCordinate + " " + yCordinate);
    // },
    
    var list=document.getElementById("todo-list-items");
    list.addEventListener (
        "click", 
        function(ev) {
            //alert ("you clicked this item");
            if (ev.target.tagName == "LI")
            {
               ev.target.classList.toggle ("done"); 
            }
        },

        false

    );


// for console in browser: shortcuts is CTRL +SHIFT + I
// for commenting code: shortcut is CTRL + K + C 
// for selecting multiple same words or things at once shortcut is CTRL + D and once done, dont forget to press ESC
// Debugging is very useful skill to have for Front End development. 
// What is toggling? Car push start stop analogy 
// Stuff to explore  
// Play with element console window. CTRL + SHIFT + I the "Elements". Notice the changes being made by EventListener function 
// Apply some line through CSS from internet. Show creativity for searching on Google.


