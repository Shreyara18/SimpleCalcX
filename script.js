let displayValue = "0";

function appendToDisplay(val) {
    if (displayValue === "0") {
        displayValue = val;
    } else {
        displayValue += val;
    }
    document.getElementById("input").value = displayValue;
}

function resetDisplay() {
    displayValue = "0";
    document.getElementById("input").value = displayValue;
}

function deleteDigit() {
    if (displayValue.length === 1) {
        displayValue = "0";
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    document.getElementById("input").value = displayValue;
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        document.getElementById("input").value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById("input").value = "Error";
    }
}
