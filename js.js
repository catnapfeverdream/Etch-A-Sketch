// create square divs //
const totalDivs = 16; //change this number to scale the grid//
const divContainer = document.getElementById("grid-container");


for (let i=0; i < totalDivs; i++) {
    divContainer.innerHTML += '<div class="grid-item"></div>';
}