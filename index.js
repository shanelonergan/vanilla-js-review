// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const button = document.createElement('div')
button.innerHTML = "<button type='button' style='color:green;border-color:red;width:15vw;height:5vh;font-weight:bold;font-size:2.5vw;margin:1vh'> Click me! </button>" 
appDiv.appendChild(button)

const makeButton = () => {
  const button = document.createElement('div')

  const randomBorderColor = Math.floor(Math.random()*16777215).toString(16);
  const randomTextColor = Math.floor(Math.random()*16777215).toString(16);

  button.innerHTML = `<button type='button' style='color:#${randomTextColor};border-color:#${randomBorderColor};width:15vw;height:5vh;font-weight:bold;font-size:2.5vw;margin:1vh'> Click me! </button>`

  appDiv.appendChild(button)

  button.addEventListener('click', makeButton)
}

button.addEventListener('click', makeButton)