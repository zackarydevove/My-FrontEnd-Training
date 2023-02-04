const buttons = document.querySelector("input")
const display = document.getElementsByClassName('.text')


buttons.addEventListener("click", console.log("recu"))

let tab = []
let res

// buttons.addEventListener("click", calculate(button))

function calculate(button) {
    const value = button.textContent

    if (value == "AC") {     // if button is AC then clear the display
        tab = []
        screenDisplay.textContent = '0'
    }
    else if (value == "=") {    // if button is = then do the result of tab
        eval(res);
    }
    else {  // else add to tab
        tab.push(value);
        res = tab.join('');
        screenDisplay.textContent = res;
    }
}
