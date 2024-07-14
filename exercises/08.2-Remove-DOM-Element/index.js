// Your improved code using childNodes

// let parentElement = document.querySelector("#parentLi");
// let childNodes = parentElement.childNodes;

// childNodes.forEach(node => {
//     if (node.nodeType === 1) { // Ensuring it's an element node
//         console.log(node.innerHTML);
//     }
// });

// childNodes.forEach(node => {
//     if (node.nodeType === 1 && node.innerHTML.trim() === 'Second element') {
//         parentElement.removeChild(node);
//     }
// });


let parentElement = document.querySelector("#parentLi");
let childElements = Array.from(parentElement.children);

childElements.forEach(child => {
    console.log(child.innerHTML);
});

childElements.forEach(child => {
    if (child.innerHTML.trim() === 'Second element') {
        parentElement.removeChild(child);
    }
});


