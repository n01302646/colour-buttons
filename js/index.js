
//REFERENCES
let redButton = document.querySelector('#redc');
let blueButton = document.querySelector('#bluec');
let greenButton = document.querySelector('#greenc');

function button_click(color) {
    console.log('test')
    document.querySelector('body').style.backgroundColor = color;
}

// redButton.onclick = button_click;
// blueButton.onclick = button_click;
// greenButton.onclick = button_click;

redButton.addEventListener('click', function(event) { button_click('red') })
blueButton.addEventListener('click', function(event) { button_click('green') })
greenButton.addEventListener('click', function(event) { button_click('blue') })


