let totalDivs = 16;
const divContainer = document.getElementById('grid-container');
const newColor = ['#000000', '#e7e784', '#4fa0a0']

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
    };
        
        //hover effect so grid divs change color when the mouse passes over them//
        divContainer.addEventListener('mouseover', (event) => {
            const item = event.target;
            // Basic Color effect - removed for alternates: newDiv.style.backgroundColor = '#000000';//

            if (event.target.classList.contains('grid-items')) {
                if (!item.style.backgroundColor) {
                    const randomIndex = Math.floor(Math.random() * newColor.length);
                    item.style.backgroundColor = newColor[randomIndex];
                }

                //progressive darkening effect where each interaction darkens the square by 10%//
                let currentOpacity = parseFloat(event.target.style.opacity) || 0;
                if (currentOpacity <1) {
                    event.target.style.opacity = (currentOpacity + 0.1).toFixed(1);
                }
            }
        });    
}

createGrid(totalDivs);

//reset btn//

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
    totalDivs = number * number;
    createGrid(totalDivs);
    }
}

   