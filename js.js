let totalDivs = 16;
const divContainer = document.getElementById('grid-container');

function createGrid(numDivs) {
    divContainer.innerHTML = '';

    let squaresPerSide = Math.sqrt(numDivs);
    let boxSizePercentage = 100 / squaresPerSide;
    let itemWidth = `calc((90vmin - 6px) / ${squaresPerSide})`;
    let itemHeight = `calc((90vmin - 6px) / ${squaresPerSide})`;

    for (let i=0; i < numDivs; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid-items');
        newDiv.style.width = itemWidth;
        newDiv.style.height = itemHeight;

        divContainer.appendChild(newDiv);

        newDiv.style.width = `${boxSizePercentage}%`;
        newDiv.style.height = `${boxSizePercentage}%`;
        
        // hover effect so grid divs change color when the mouse passes over them //

        newDiv.forEach((item) => {
            // Basic Color: newDiv.style.backgroundColor = '#000000';//
            //progressive darkening effect where each interaction darkens the square by 10%. achieve full color by 10 overs.//
            item.addEventListener('mouseover', () => {
                let currentOpacity = parseFloat(item.style.opacity) || 0;
                
                if (currentOpacity <1) {
                    item.style.opacity = (currentOpacity + 0.1).toFixed(1);
            }
            })
            
            });
            //randomize the squares' RGB values//
    };
}

createGrid(totalDivs);

// reset-btn ID to send a popup asking for # of squares per side for the new grid. Once entered, existing grid will be removed, new grid will be generated in the same total space as before for new sketch pad.//

const resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', resetPrompt) 

    //send pop up prompting user to input number//
function resetPrompt() {
    let userInput = prompt('how many squares per side, my liege?', '25');
    let number = Number(userInput);
         //set user input to max of 100 //
    if (isNaN(number) || number <= 0 || number > 100) {
           alert('errrrrrr');
    } else {
    //multiply number by itself to make total div number and replace value of totalDivs//
    totalDivs = number * number;
    //generate new grid with new number of divs//
    createGrid(totalDivs);
    }
}

   