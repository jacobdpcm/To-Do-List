import './style.css';
import sun from './images/sun.svg';

const body = document.querySelector('body');
const imageSun = document.createElement('img');
imageSun.src = sun;
body.appendChild(imageSun);

console.log('test');