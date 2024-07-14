// Your code here

let inputElement = document.querySelector('#addToDo');

{/* <li>
<span><i class="fa fa-trash"></i></span> Sleep
</li> */}

let typingTimer;                // Timer identifier
let doneTypingInterval = 2000;   // Time in milliseconds (e.g., 500ms = 0.5 seconds)

// On keyup, start the countdown
inputElement.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

// On keydown, clear the countdown 
inputElement.addEventListener('keydown', () => {
    clearTimeout(typingTimer);
});

// User is "finished typing," do something
function doneTyping() {
    document.write(`You finished typing: ${inputElement.value}`);
    // You can add any other functionality you need here
}

