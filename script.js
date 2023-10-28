const canvas = document.getElementById("Screen");
const context = canvas.getContext("2d");
const Width = canvas.innerWidth;
const Height = canvas.innerHeight;

var fontSize = 12;

var numOfRows = Math.floor(screenHeight / fontSize);
var numOfColumns = Math.floor(screenWidth / fontSize);

for(let x = 0; x < numOfRows*numOfColumns; x++)
{

}

function getRandomCharacter()
{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return characters.charAt(Math.floor(Math.random()*characters.length));
}