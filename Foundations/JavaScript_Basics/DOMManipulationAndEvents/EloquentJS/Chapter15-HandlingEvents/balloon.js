/*
programming problem solving method
  step 1 - understand the problem
    Write the html, css, and js for a webpage which displays a balloon emoji.
    When the up arrow is pressed the balloon emoji should grow 10% in size.
    When the down arrow is pressed the balloon emoji shouls shrink 10% in size.
    Control the size of text and emojis using the CSS font-size property of an 
    element. Remember to include a unit in the value for example 10px.
    The key names of the arrow keys are "ArrowUp" and "ArrowDown".
    Make sure the keys change only the size of the balloon and do not scroll down the page.
    Once this works add a feature where if you inflate the balloon beyong a certain size 
    it explodes by being replcaed by an 💥 emoji, and the event handler is removed so that 
    you can't inflat or deflate the explosion emoji.
  step 2 - plan how you are going to solve the problem
    A - Does your program have a user interface? What will it look like?
    What functionality will it offer? Sketch it out on paper
    My program will have an emoji displayed on the screen and that's it.
    It will offer the functionality that the balloon emoji increases/decreases in size
    if the user presses the arrowUp/arrowDown buttons. If the balloon increases beyond
    a certain size an explosion emoji will display and button presses will become 
    unresponsive.
    B - What inputs will your program have? 
    Will the user enter the data or will you get your inputs from somewhere else?
    My program will have up arrow button and down arrow button presses as inputs.
    The user will enter the data by pressing either the up or down arrow buttons.
    C - What's the desired output?
    The desired output of the program is for the balloon emoji to inflate/deflate 
    when the user presses the arrowUp/arrowDown buttons and for the balloon emoji
    to turn into an explosion emoji and for button presses to become unresponsive 
    if the balloon is inflated beyond a certain size.
    D - Given your inputs, what are the steps necessary to return the desired output?
    Write an algorithm in pseudocode whereby you define the steps that need to be taken
    by the computer to solve the problem.
      
      add an event handler for keyboard button presses
      if the down arrow is pressed decrease the size of the balloon emoji by 10%
      if the up arrow is pressed increase the size of the balloon emoji by 10%
      if the emoji becomes 50% as high or wide as the screen 
        turn the balloon emoji into an explosion emoji
        and remove the event handlers from the arrow up/down buttons

  Step 3 - Divide and conquer
    Each of the steps in the algorithm we wrote out in the last section are subproblems. 
    Pick the smallest or simplest one and start there with coding.
    Break the big problem down and solve each of the smaller problems until you've 
    solved the big problem.
*/

// make a paragraph element which contains a balloon emoji
let balloon = document.createElement("p");
balloon.textContent = "🎈";

let fontSize = 10;
balloon.style.fontSize = fontSize + "px";

document.querySelector("body").appendChild(balloon);

// add an event handler for keyboard button presses
document.body.addEventListener("keydown", event => {
  event.preventDefault();

  switch (true) {
  // if the down arrow is pressed decrease the size of the balloon emoji by 10%
  case (event.key == "ArrowUp"):
      if (parseInt(balloon.style.fontSize) >= 100)
      {
        balloon.textContent = "💥"
      }
      balloon.style.fontSize = parseFloat(balloon.style.fontSize) * 1.1 + "px";
      break;

  case (event.key == "ArrowDown"):
      balloon.style.fontSize = parseFloat(balloon.style.fontSize) * 0.9 + "px";
      break;
  }
});
