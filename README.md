# Calculator Using Form

This markdown document provides a detailed breakdown of the JavaScript functionality implemented within the provided HTML file.

## Initialization

The JavaScript code initializes an empty array named `history` to store calculation history.

## Event Listeners

Event listeners are attached to various elements in the HTML, such as input fields and buttons. These listeners trigger specific functions when certain events occur, such as changes in input or button clicks.

## Updating Expression

The `updateExpression` function is responsible for dynamically updating the expression display based on user inputs. It retrieves values from the input fields and select dropdown, constructs the expression string, and updates the expression display accordingly.

## Calculation

The `calculate` function computes the result based on the operands and operator selected by the user. It handles various edge cases such as invalid inputs and division by zero. The result is displayed in the result display area, and the calculation is added to the history array.

## Clearing Functions

- The `clearExpression` function clears the input fields and resets the expression display.
- The `clearHistory` function clears the history array and updates the history display.

## Displaying History

The `showHistory` function displays the calculation history stored in the history array.

## Arithmetic Operations

Separate functions are defined for basic arithmetic operations such as addition, subtraction, multiplication, division, percentage, and exponentiation (used for calculating powers).
