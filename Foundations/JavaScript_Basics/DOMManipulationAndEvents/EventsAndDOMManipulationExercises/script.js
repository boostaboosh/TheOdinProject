// event method two: external JS DOM element onclick property function
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

// event method three: attach event listener to DOM element nodes to trigger function call in external JS
const btnTwo = document.querySelector('#btnTwo');
btnTwo.addEventListener('click', () => {
    alert('Hello World');
});

// passing object that references the event itself as an argument to the function call
const btnThree = document.querySelector('#btnThree');
btnThree.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    e.target.style.background = 'blue';
});

// adding an event listener to multiple buttons with one command
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', (event) => {
        alert(button.id);
        event.target.style.color = 'red';
    })    
}