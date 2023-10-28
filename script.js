const gridContainer = document.getElementById("grid-container")
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

var numOfRows = Math.floor (screenHeight / 12);
var numOfColumns = Math.floor(screenWidth / 12);

for(let x = 0; x < numOfRows*numOfColumns; x++)
{
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.innerText = getRandomCharacter();
    gridContainer.appendChild(gridItem);
}

function getRandomCharacter()
{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return characters.charAt(Math.floor(Math.random()*characters.length));
}