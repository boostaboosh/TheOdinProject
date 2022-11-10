// event method two: external JS DOM element onclick property function
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

// event method three: attach event listener to DOM element nodes to trigger function call in external JS
const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', () => {
    alert('Hello World');
})