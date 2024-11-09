let count = 0;
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let increaseBtn = document.getElementById("increase");
let value = document.getElementById("value");

function updateDisplay() {
    value.textContent = count;
    if (count < 0) {
        value.style.color = "red";
    }
    else if (count > 0) {
        value.style.color = "green";
    }
    else {
        value.style.color = "black";
    }
}

decreaseBtn.onclick = function() {
    value.textContent = count--;
    updateDisplay();
}

increaseBtn.onclick = function() {
    value.textContent = count++;
    updateDisplay();
}

resetBtn.onclick = function() {
    count = 0;
    updateDisplay();
}
