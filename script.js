function getRandomCharacter()
{
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    randomChar = Math.random()*characters.length;
    
    return characters.charAt(randomChar);
}

const parent = document.getElementById("screen");
const columns = 60;
const lines = 30;

for(y = 0; y <= lines; y++)
{
    var lineSection = document.createElement("section");
    parent.appendChild(lineSection);

    for(x = 0; x < columns; x++)
    {
        var element = document.createElement("button");
        element.id = y+"-"+x;
        element.onmouseover = createEffect;
        lineSection.appendChild(element);

        var content = element.innerHTML;
        element.innerHTML = content+".";
    }
}

// function changeChar(char, x, y)
// {
//     var element = document.getElementById(y+"-"+x);
//     var text = element.innerHTML;
//     element.innerHTML = text.substring(0, x) + char + text.substring(x+1);
// }

// changeChar('Ç', 0, 0);

function updateChar(char, id)
{
    const element = document.getElementById(id);
    if(element) 
    {
        element.innerHTML = char;
    }
}


function createEffect(e)
{
    const source = e.target || e.srcElement;
    source.innerHTML = getRandomCharacter();

    var duration = 300;

    const [yStr, xStr] = source.id.split('-');
    const y = parseInt(yStr);
    const x = parseInt(xStr);

    const doAnimAndClearAfter = (id) => {
        updateChar(getRandomCharacter(), id);
        setTimeout(() => {
            updateChar('.', id);
        }, duration*5)
    }

    setTimeout(() => {
        var k = 1;
        var maxK = 5;

        source.innerHTML = '.'
        // +
        var top = () => (y-k)+'-'+x;
        var bottom = () => (y+k)+'-'+x; 
        var left = () => y+'-'+(x-k);
        var right = () => y+'-'+(x+k);
        // X
        var topLeft = () => (y+k)+'-'+(x-k);
        var topRight = () => (y+k)+'-'+(x+k);
        var bottomLeft = () => (y-k)+'-'+(x-k);
        var bottomRight = () => (y-k)+'-'+(x+k); 

        setInterval(() => {
            doAnimAndClearAfter(top());
            doAnimAndClearAfter(bottom());
            doAnimAndClearAfter(left());
            doAnimAndClearAfter(right());
            doAnimAndClearAfter(topLeft());
            doAnimAndClearAfter(topRight());
            doAnimAndClearAfter(bottomLeft());
            doAnimAndClearAfter(bottomRight());
            
            if (k === maxK){
                clearInterval();
            }

            k++;
            
        }, duration)
    }, duration)

}
