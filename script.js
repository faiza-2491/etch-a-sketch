const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++)
{
    const gridItem = document.createElement("div");
    gridItem.classList.toggle("grid-item");
    gridContainer.appendChild(gridItem);
}