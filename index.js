// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const button = document.createElement('button')
button.innerHTML = "<button type='button'> Click me! </button>" 
appDiv.appendChild(button)