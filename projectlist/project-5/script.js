// Get the screen element
const screen = document.getElementById('screen');

// Function to append values to the screen
function appendToScreen(value) {
    screen.value += value;
}

// Function to clear the entire screen
function clearScreen() {
    screen.value = '';
}

// Function to clear the last entry (for CE button)
function clearEntry() {
    screen.value = screen.value.slice(0, -1);
}

// Function to evaluate the expression
function calculate() {
    try {
        // Replace π and e with their values
        let expression = screen.value.replace(/π/g, Math.PI).replace(/e/g, Math.E);
        
        // Use eval to calculate the result
        screen.value = eval(expression);
    } catch (error) {
        screen.value = 'Error'; // Display error if invalid expression
    }
}

// Function to calculate factorial
function factorial(num) {
    if (num < 0) return 'Error'; // Factorial is not defined for negative numbers
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

// Attach event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        switch (buttonText) {
            case 'AC':
                clearScreen(); // Clear the entire screen
                break;
            case 'CE':
                clearEntry(); // Clear the last entry
                break;
            case '=':
                calculate(); // Calculate the result
                break;
            case 'x!':
                const valueForFactorial = eval(screen.value); // Get the value before factorial
                screen.value = factorial(valueForFactorial).toString();
                break;
            case 'sin':
                screen.value = Math.sin(eval(screen.value)).toString();
                break;
            case 'cos':
                screen.value = Math.cos(eval(screen.value)).toString();
                break;
            case 'tan':
                screen.value = Math.tan(eval(screen.value)).toString();
                break;
            case '√':
                screen.value = Math.sqrt(eval(screen.value)).toString();
                break;
            case '%':
                // For modulus, we need to ensure it's being evaluated correctly
                appendToScreen(buttonText); // Append modulus symbol
                break;
            default:
                appendToScreen(buttonText); // Append value to the screen
        }
    });
});
