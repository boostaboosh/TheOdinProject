const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

let redParagraph = document.createElement('p');
redParagraph.classList.toggle('red');
redParagraph.style.color = 'red';
redParagraph.textContent = `Hey, I'm red!`;
container.appendChild(redParagraph);

let levelThreeHeading = document.createElement( 'h3' );
levelThreeHeading.classList.toggle( 'blue-heading' );
levelThreeHeading.style.setProperty( 'color' , 'blue' );
levelThreeHeading.innerHTML = `I'm a blue h3`;
container.appendChild(levelThreeHeading);

let pinkContainer = document.createElement( `div` );
pinkContainer.classList.toggle( `content-pink` );
pinkContainer.setAttribute( `style` , `background-color : pink; border-color : black; border-width : 5px; border-style : solid;` );
console.log(window.getComputedStyle(pinkContainer));
container.appendChild(pinkContainer);

let levelOneHeading = document.createElement( 'h1' );
levelOneHeading.setAttribute( 'id' , 'content-heading' );
console.log(levelOneHeading.id);
levelOneHeading.textContent = `I'm in a div.`;
pinkContainer.append(levelOneHeading);

let paragraphInADiv = document.createElement( 'p' );
paragraphInADiv.classList.toggle( 'content-paragraph' );
styleOfParagraphInADiv = paragraphInADiv.style;
styleOfParagraphInADiv.cssText = 'color : green';
styleOfParagraphInADiv.cssText = '';
paragraphInADiv.textContent = 'ME TOO!';
pinkContainer.insertBefore(paragraphInADiv, levelOneHeading);