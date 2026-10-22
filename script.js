const gridContainer = document.querySelector(".grid-container");

// setting up grid with default number of squares per side (16)
let currentSize = 16;
for (let i = 0; i < (16 * 16); i++)
{
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
}

// list of all squares in the grid
let allGridItems = document.querySelectorAll(".grid-item");

// cleaner method for changing the color of the background when hovering over a div
function changeBackground(item)
{
    // there is no "hover" event so user mouse enter and mouse leave
    item.addEventListener("mouseenter", () => {
        // math.floor rounds down and multiplying by 256 allow the nummber generated to include 255
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

    item.addEventListener("mouseleave", () => {
        item.style.backgroundColor = "white";
    });
}
allGridItems.forEach(changeBackground);

// changes the number of squares per side
function changeNumSquares()
{
    // prompts user for new number of squares per size and parses it into an int
    // since prompt returns a string
    let newSize = prompt("Enter a new number of squares per side, (max = 100): ");
    let pureNewSize = parseInt(newSize);

    if (pureNewSize > currentSize && pureNewSize <= 100)
    {
        // if the new amount of squares per side is greater than the current amount of squares per side
        // subtract the current amount of squares from the new expected amount of squares
        let squaresToAdd = (pureNewSize * pureNewSize) - (currentSize * currentSize);
        // and add the amount of squarestoadd to the gridContainer
        for (let i = 0; i < squaresToAdd; i++)
        {   
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
        }
    }
    else if (pureNewSize < currentSize && pureNewSize > 0)
    {
        // decreasing the amount of squares per side in the grid by removing all the elemnts in the grid container
        while (gridContainer.firstChild != null)
        {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        // then adding the new decreased amount of squares in the container
        let squaresToAdd = pureNewSize * pureNewSize;
        for (let i = 0; i < squaresToAdd; i++)
        {   
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
        }
    }

    // updates the node list of allGridItems, changes its size, updates the current number of squares per side, 
    // and makes sure all squares change color when hovered over
    allGridItems = document.querySelectorAll(".grid-item");
    allGridItems.forEach((item) => {
        let size = 600.0 / pureNewSize;
        item.style.height = `${size}px`;
        item.style.width = `${size}px`;
    })
    currentSize = pureNewSize;
    allGridItems.forEach(changeBackground);
}

// gets the change side button and changes the number of squares per side when clicked
const changeSquareBtn = document.querySelector(".change-squares");
changeSquareBtn.addEventListener("click", changeNumSquares);


