let display = document.getElementById('display');
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculateResult() {
    try {
        display.value = calculate(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
function calculate(expression) {
    const operators = ['+', '-', '*', '/'];
    let numbers = expression.split(/[\+\-\*\/]/).map(num => parseFloat(num));
    let operator = expression.match(/[\+\-\*\/]/);
    if (operator && operator.length > 0) {
        operator = operator[0];
    } else {
        return numbers[0];
    }
    switch (operator) {
        case '+':
            return numbers[0] + numbers[1];
        case '-':
            return numbers[0] - numbers[1];
        case '*':
            return numbers[0] * numbers[1];
        case '/':
            if (numbers[1] !== 0) {
                return numbers[0] / numbers[1];
            } else {
                return 'Error';
            }
        default:
            return 'Error';
    }
}