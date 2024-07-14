let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let elem = document.createElement('div');

	elem.innerHTML = 'Hello World';
	elem.style.background = 'yellow';
	elem.style.color = "pink";
	elem.style.fontSize = "3rem";

	document.body.appendChild(elem);
	
});
