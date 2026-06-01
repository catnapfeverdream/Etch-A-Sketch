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

resetBtn.addEventListener('click', resetPrompt) 
    //send pop up prompting user to input number//
    function resetPrompt() {
        let text;
        let number = prompt('how many squares per side, my liege?', '25');
         //set user input to max of 100 //
        if (number == null || number =='' || number > 100 === true) {
            text = 'err';
        } else {
         //multiply number by itself to make total div number and replace value of totalDivs//
          number *= number;
          //remove existing grid//
          let oldGrid = document.querySelectorAll('.grid-items');
          oldGrid.forEach(item => item.remove());

          //generate new grid with new number of divs//
          for (let i=0; i < totalDivs; i++) {
            let totalDivs = number;
            const newDiv = document.createElement('div');
            const divContainer = document.getElementById("grid-container");
            newDiv.classList.add('grid-items');
            divContainer.appendChild(newDiv);
            newDiv.addEventListener('mouseover', () => {
            newDiv.style.backgroundColor = 'yellow';
    });
          }
    
        // hover effect so grid divs change color when the mouse passes over them //
        }
    }

   