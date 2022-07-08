let numOfSquares = 6

let colors = generateRandomColors(numOfSquares)

let square = document.querySelectorAll('.square')

let display = document.querySelector('#colorDisplay')

let body = document.querySelector('body')

let titulo = document.querySelector('.titulo')

let mensaje = document.querySelector('#message')

let pickedColor = pickColor()

display.textContent = pickedColor

let clickedColor

let easyBtn = document.querySelector("#easyBtn") 

let hardBtn = document.querySelector("#hardBtn") 

let buttonReset = document.querySelector('#reset')

let buttons = document.querySelectorAll(".butons")


init()

function init(){
    setBtns()
    resetGame()
    reset()
}

for (let i = 0; i < square.length; i++) {

    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener('click', function(){

        clickedColor = square[i].style.backgroundColor

        if (clickedColor !== pickedColor) {

            this.style.backgroundColor = '#232323'
            mensaje.textContent = 'Intentalo de nuevo'
        } else {
            titulo.style.backgroundColor = clickedColor
            mensaje.textContent = "Es Correcto!"
            changedColors(clickedColor)
            buttonReset.textContent = "Jugar de nuevo?"
        }
    });
}

mensaje.textContent = ''

function changedColors (color){

    for (let i = 0; i < square.length; i++) {

        square[i].style.backgroundColor = color
    }
}
function pickColor() {

    let numero = Math.floor(Math.random()*colors.length)

    return colors[numero]
}

function randomColor() {

    let numeroR = Math.floor(Math.random()*256);
    let numeroG = Math.floor(Math.random()*256);
    let numeroB = Math.floor(Math.random()*256);

    return `rgb(${numeroR}, ${numeroG}, ${numeroB})`

}

function generateRandomColors(numero){

    let arr = []
    for (let i = 0; i < numero; i++) {
        arr.push(randomColor())
    }

    return arr
}

function resetGame(){ 
    buttonReset.addEventListener("click", function(){
    titulo.style.backgroundColor = "#232323"
    mensaje.textContent = ''
    colors = generateRandomColors(numOfSquares)
    pickedColor = pickColor()
    display.textContent = pickedColor
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    }

    buttonReset.textContent = "New Colors"
    
})
}

function reset() {
   colors = generateRandomColors(numOfSquares)
   pickedColor = pickColor()
   display.textContent = pickedColor
   for(let i=0; i < square.length; i++){
    if (colors[i]) {

        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block"
    }else {
        square[i].style.display = "none"
    }

   }
    titulo.style.backgroundColor = "#232323"
    mensaje.textContent = ''
    buttonReset.textContent = "New Colors"
}

function setBtns(){
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            buttons[0].classList.remove("selected");
            buttons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === ("Easy") ? numOfSquares = 3: numOfSquares = 6
            reset();
        });
    }
}