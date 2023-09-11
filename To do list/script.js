const inputBox= document.getElementById("input-box");
const containerList= document.getElementById("Container-list");

function addtasks(){
    if(inputBox.value==""){
        alert("You must right something");
    }
    else{
        let li = document.createElement("li");
        // create html list
        li.innerHTML =inputBox.value;
        // add text to list  from input box 
        containerList.appendChild(li);
        // display list in containerList
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
 
// click Function
containerList.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

// Save data in browser
function saveData(){
    localStorage.setItem("data",containerList.innerHTML);
}
// Display data in browser
function display(){
    containerList.innerHTML=localStorage.getItem("data");
}
display();