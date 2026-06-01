   // create square divs //
let totalDivs = 16; //change this number to scale the grid//
const divContainer = document.getElementById("grid-container");


for (let i=0; i < totalDivs; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-items');
    divContainer.appendChild(newDiv);
    
    // hover effect so grid divs change color when the mouse passes over them //

    newDiv.addEventListener('mouseover', () => {
        newDiv.style.backgroundColor = 'yellow';
    });
};

// reset-btn ID to send a popup asking for # of squares per side for the new grid. Once entered, existing grid will be removed, new grid will be generated in the same total space as before for new sketch pad.//

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener('click', () => {
    //send pop up prompting user to input number//
    function resetPrompt() {
        let text;
        let number = prompt('how many squares per side, my liege?', '25');
        if (number == null || number =='' || number > 100 === true) {
            text = 'err';
        } else {
          let totalDivs = number;  
        }
    }

    //set user input to max of 100 //


    //multiply number by itself to make total div number and replace value of totalDivs//

    //remove existing grid//

    //generate new grid with new number of divs//
})