// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const tooltipDiv = document.querySelector('.buttonContainer')
console.log(tooltipDiv)

const button = document.createElement('button') 
button.style = 'color:green;border-color:red;width:15vw;height:5vh;font-weight:bold;font-size:2.5vw;margin:1vh'
button.class='tooltiptext'
button.innerText = 'Click Me!'
button.type = 'button'

tooltipDiv.appendChild(button)

console.log(tooltipDiv)

const displayColors = (borderHex, textHex) => {
  
}

const makeButton = () => {
  const button = document.createElement('div')

  const randomBorderColor = Math.floor(Math.random()*16777215).toString(16);
  const randomTextColor = Math.floor(Math.random()*16777215).toString(16);

  button.innerHTML = `<button type='button' style='color:#${randomTextColor};border-color:#${randomBorderColor};width:15vw;height:5vh;font-weight:bold;font-size:2.5vw;margin:1vh'> Click me! </button>`

  appDiv.appendChild(button)

  button.addEventListener('click', makeButton)
  // button.addEventListener('hover', )

}

button.addEventListener('click', makeButton)