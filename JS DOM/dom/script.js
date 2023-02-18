let ul = document.getElementById("task-list"); 

// children, firstElementChild, lastElementChild
// parentElement
// nextElementSibling, previousElementSibling

sonuc = ul.children; 
ul.children[0].children[0].children[0]; 
ul.children[0].children[0].children[0].checked = true;  
ul.children[0].nextElementSibling.children[0].children[0].checked = true;  
ul.children[2].children[0].children[0].checked = true;  
// sonuc = ul.firstElementChild; 
// sonuc = ul.lastElementChild;   

// sonuc = document.getElementById("task-list").parentElement;  
// sonuc = document.querySelector(".task").nextElementSibling.nextElementSibling.previousElementSibling;            

console.log(sonuc);       