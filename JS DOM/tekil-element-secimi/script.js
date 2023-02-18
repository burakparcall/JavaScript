let sonuc;

sonuc = document.getElementById("title");
sonuc = document.getElementById("title").id;
sonuc = document.getElementById("title").className;
sonuc = document.getElementById("title").classList;

document.getElementById("title").style.fontSize = "30px";
document.getElementById("title").style.color = "red";
document.getElementById("title").style.fontStyle = "italic";
// // document.getElementById("title").style.display = "none";

document.getElementById("title").innerText = "To Do App2";
document.getElementById("title").innerHTML = "<p>To Do App2</p>";

sonuc = document.querySelector("#title"); 
sonuc = document.querySelector(".card-header");
sonuc = document.querySelector("div");

sonuc = document.querySelector("li");
sonuc = document.querySelector("li:first-child");
sonuc = document.querySelector("li:last-child");
sonuc = document.querySelector("li:nth-child(2)");

console.log(sonuc);