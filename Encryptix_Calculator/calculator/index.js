function calculator() {
    document.getElementById("result").innerHTML = "0";
    document.getElementById("smallResult").innerHTML = "";
}

function takeNumber(value) {
    var result = document.getElementById("result").innerHTML;
    if (result === "0") {
        document.getElementById("result").innerHTML = value;
    } else {
        document.getElementById("result").innerHTML += value;
    }
}

function calculateResult(operator) {
    var result = document.getElementById("result").innerHTML;
    var smallResult = document.getElementById("smallResult").innerHTML;

    if (smallResult !== "") {
        total();
        smallResult = "";
    } else {
        document.getElementById("smallResult").innerHTML = result + " " + operator;
        document.getElementById("result").innerHTML = "0";
    }
}

function total() {
    var result = document.getElementById("result").innerHTML;
    var smallResult = document.getElementById("smallResult").innerHTML;
    var operator = smallResult.split(" ")[1]; 
    var expression = smallResult.split(" ")[0] + operator + result; 
    var totalResult;

    switch (operator) {
        case '+':
            totalResult = parseFloat(smallResult) + parseFloat(result);
            break;
        case '-':
            totalResult = parseFloat(smallResult) - parseFloat(result);
            break;
        case '*':
            totalResult = parseFloat(smallResult) * parseFloat(result);
            break;
        case '/':
            totalResult = parseFloat(smallResult) / parseFloat(result);
            break;
        default:
            totalResult = "Error";
    }

    document.getElementById("result").innerHTML = totalResult;
    document.getElementById("smallResult").innerHTML = "";
}
