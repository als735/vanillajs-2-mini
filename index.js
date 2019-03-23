document.querySelector("form").addEventListener
("submit", addTodo); 

function addTodo(event) {
    event.preventDefault() 
   const item = document.createElement("li"); 
   item.innerText  = document.getElementById("item").value 

   item.addEventListener("click", completeTodo); 


   const button = document.createElement("button"); 
   button.innerText = "X"; 
   button.addEventListener("click", removeTodo);
   item.append(button); 

   const list = document.querySelector("ul"); 
   list.appendChild(item); 
}

function removeTodo(event) {  
    event.stopPropagation(); 
    event.target.parentNode.remove(); 
}

function completeTodo(event) {
   const val = event.target.getAttribute("aria-checked")
   if (val !== "true") {
       event.target.setAttribute("aria-checked", "true"); 
   } else {
       event.target.setAttribute("aria-checked","false"); 
   }
   showMessage(); 
}

const aside = document.getElementById("completed-message");

function showMessage(){
    aside.style.visibility = "visible"; 
    setTimeout(hideMessage, 2000);
    }

function hideMessage(){
    aside.style.visibility = "hidden"; 
}


// `setTimeout(()=>{
 //   console.log('two seconds later')
//   }, 2000);```