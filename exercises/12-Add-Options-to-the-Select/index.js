let countries = ["USA", "France", "Italy", "Brazil", "Mexico", "Colombia", "Belize", "Venezuela"];

// Your code here

let selectorParent = document.querySelector('#mySelect');

countries.forEach(country => {
    let option = document.createElement('option');
    option.value = country;
    option.textContent = country;

    selectorParent.appendChild(option);
});

selectorParent.addEventListener('change', function(){
    let selectedCountry = selectorParent.value;

    alert(selectedCountry);
});