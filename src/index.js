import './style.css'; // Importing CSS Styles

/**
 * @description This is the main function of the application
 * @return {void}
 */
function init() {
  // Getting the root element
  const root = document.getElementById('root');

  // Creating the title element
  const title = document.createElement('h1');
  title.textContent = 'Webpack Base Project - Vanilla JS';
  root.appendChild(title);

  // Creating the button element
  const button = document.createElement('button');
  button.classList.add('btn');
  button.textContent = 'Click me';
  button.addEventListener('click', () => {
    alert('This Works!');
  });
  root.appendChild(button);

  // Creating the image element
  const image = document.createElement('img');
  image.classList.add('webpack-img'); // Adding the image class
  image.src = require('./img/webpack.png'); // Setting the image source
  image.alt = 'Random Image'; // Setting the image alt
  root.appendChild(image); // Appending the image to the root element
}

init(); // Calling the main function
