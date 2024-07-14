// If you check the HTML, you will find that the second <li> has the id=secondElement
// You can use that to your advantage like a CSS selector

// Your code here

let element = document.querySelector("#secondElement")
let parentElement = document.querySelector('ul');

element.parentNode.removeChild(document.querySelector('#thirdElement'));
parentElement.removeChild(element);