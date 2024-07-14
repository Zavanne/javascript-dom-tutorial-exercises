let button = document.getElementById("superDuperButton");
let partialLis = ['Fourth', 'Fifth','Sixth','Extra']
let index = 0;
button.addEventListener("click", function() {
	// Your code here
	let parentElement = document.querySelector('#myList');
	let childLi = document.createElement('li');
	if (index < 3){
		childLi.innerHTML = `${partialLis[index]} element`;
	} else {
		childLi.innerHTML = `${partialLis[3]} element`
	}
	parentElement.appendChild(childLi)
	index++;

});
