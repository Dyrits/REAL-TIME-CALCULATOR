# REAL-TIME-CALCULATOR

Real Time Calculator is a basic calculator with a real-time display of calculations, allowing users to perform addition, subtraction, multiplication, and division. It updates the result dynamically as users input numbers and operators, ensuring an intuitive and responsive user experience.

## About The Project

Built as the [Calculator Project](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/calculator) from The Odin Project.

### Assignment

Here are some use cases (expectations about the project):

1. The calculator contains functions for all of the basic math operators typically found on calculators: add, subtract, multiply, divide.
2. A calculator operation consists of a number, an operator, and another number (for example, 3 + 5), stored in three variables used to update the display.
3. A function `operate` takes an operator and two numbers and then calls one of the above functions on the numbers.
4. A basic HTML calculator with buttons for each digit and operator (including `=`), a display, and a "clear" button.
5. Functions populate the display when the digit buttons are clicked; the content of the display is stored in a variable.
6. The first and second numbers input by the user are stored, then `operate()` is called when the user presses `=`, and the display is updated with the result.
7. Gotchas handled:
   - The calculator does not evaluate more than a single pair of numbers at a time.
   - Answers with long decimals are rounded so they don't overflow the display.
   - Pressing `=` before entering all of the numbers or an operator does not cause problems.
   - Pressing "clear" wipes out any existing data.
   - A snarky error message is displayed if the user tries to divide by 0, without crashing the calculator.
   - The calculator only runs an operation when supplied with two numbers and an operator; consecutive operator presses only keep the last operator entered.

### Built With

- HTML5
- CSS3
- JavaScript

## Getting Started

Launch the project in your browser through the .html file.

A live version is available: [Try it!](https://dyrits.github.io/REAL-TIME-CALCULATOR/)

## Status

The project has been completed. It is fully functional and meets the requirements of the assignment; there is no current issue. The project is complete and will not be updated further.

### Changelog

- **Version 1.00.01 (01/2025)**: the README has been updated.
- **Version 1.00.01 (05/2020)**: the first version of the project has been released.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate (if any).

## License

No license file is present in this repository.

## Contact

Created by [Dylan J. Gerrits](https://github.com/Dyrits).
