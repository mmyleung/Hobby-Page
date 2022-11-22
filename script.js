console.log("JavaScript is working");

const dateDisplay = document.getElementById("date");
let dt = new Date();
dateDisplay.innerHTML = dt.toLocaleDateString();