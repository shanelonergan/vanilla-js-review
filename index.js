// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const button = document.createElement('div')
button.innerHTML = "<button type='button' style='color:green;border-color:red;width:15vw;height:5vh;font-weight:bold;font-size:2.5vw'> Click me! </button>" 
appDiv.appendChild(button)

const makeButton = () => {
  const button = document.createElement('div')
  button.innerHTML = "<button type='button' style='color:green;border-color:red;width:15vw;height:5vh;font-weight:bold;font-size:2.5vw'> Click me! </button>" 
  appDiv.appendChild(button)
}

button.addEventListener