# DeadAnts Counter

## Youtube Video
For more information and a video tutorial, watch our [YouTube video](https://youtu.be/Sq5ejAavoO0).


## What is Pair Programming?
Pair Programming is a software development technique where two programmers work together at one workstation. The "Driver" writes the code while the "Navigator" reviews each line of code as it is typed in. The two programmers switch roles frequently to ensure both are engaged in the coding process, leading to increased code quality, enhanced learning opportunities, and improved team communication.

## How to Practice Pair Programming
1. **Choose Roles**: Decide who will start as the Driver and who will be the Navigator. The Driver is responsible for typing the code, while the Navigator focuses on strategy and reviews the code being written.
2. **Switch Roles Regularly**: Regularly switch roles to keep the session dynamic and engage both participants. This also helps in sharing knowledge and coding practices.
3. **Communicate Continuously**: The key to effective pair programming is communication. Discuss ideas, logic, and potential solutions openly.
4. **Use a Single Computer**: Pair programming is most effective when both programmers use a single workstation. This encourages collaboration and ensures both are focused on the task.
5. **Review and Refactor Together**: Both programmers should participate in reviewing and refactoring the code. This collaborative process leads to cleaner, more maintainable code.

Pair programming not only improves code quality but also enhances team synergy and facilitates faster knowledge transfer among team members.

## Project Overview
This project provides a JavaScript solution to count dead ants in a given string. The main objective is to identify and count individual 'a', 'n', 't' characters that are not part of a complete "ant" sequence, which are considered dead ants. The solution is optimized to ensure efficient processing with a focus on minimizing the number of string traversals.

## Setup Instructions
1. Clone the repository to your local machine.
2. Ensure you have Node.js installed on your system.
3. Navigate to the project directory in your terminal.
4. Install the necessary dependencies (if any) by running `npm install`.

## How to Run the Project
1. Open your terminal.
2. Navigate to the project's root directory.
3. Run the script using Node.js by executing `node deadAnts.js`.
4. Optionally, you can pass a string argument directly to the script for quick testing.

## Testing Strategy
The testing strategy for this project is outlined in `testplan.md`. The plan includes various test cases designed to cover empty inputs, strings without dead ants, strings with individual 'a', 'n', 't' characters, mixed character scenarios without complete "ant" sequences, complex strings containing both dead ants and complete "ant" sequences, and performance testing for large input strings.

### Running Tests
To execute the test suite:
1. Navigate to the project's root directory in your terminal.
2. Run the test script by executing `npm test`.
3. Review the test output for any failures or errors to ensure the solution behaves as expected across all defined scenarios.

## Contribution Guidelines
Contributions to this project are welcome. Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Implement your changes.
4. Submit a pull request with a clear description of your changes.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.
