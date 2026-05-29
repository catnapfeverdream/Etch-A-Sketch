   // create square divs //
const totalDivs = 16; //change this number to scale the grid//
const divContainer = document.getElementById("grid-container");


for (let i=0; i < totalDivs; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-items');
    divContainer.appendChild(newDiv);
    
    // hover effect so grid divs change color when the mouse passes over them //

    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'yellow';
    });

    newDiv.addEventListener('mouseout', () => {
        newDiv.style.backgroundColor = '';
    });
};

