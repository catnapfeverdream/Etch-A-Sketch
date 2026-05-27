   // create square divs //
const totalDivs = 16; //change this number to scale the grid//
const divContainer = document.getElementById("grid-container");


for (let i=0; i < totalDivs; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    divContainer.appendChild(newDiv);
};
