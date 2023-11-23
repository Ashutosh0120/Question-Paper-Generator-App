# <div align="center">Question Paper Generator App</div>

<div align="center">
  <img src="https://github.com/Ashutosh0120/Question-Paper-Generator/assets/24804042/6a7a18e8-457d-4536-ae7e-24cc42bac11b" alt="image" width="650" height="450">
</div>

## 1. Introduction 📜:
The **Question Paper Generator** app is developed using Node.js. Its primary function is to generate question papers by employing predefined question banks and mark distributions for different difficulty levels.

**_Note_**: After each execution step, the app will generate unique set of questions from the question bank.

## 2. Steps to run application 📝:
1. Specify the total marks according to your needs in the `main.js` file, under the variable named `total_marks`. (default is set to 100).
2. Adjust the marks distribution for each difficulty level in the `questionStore.js` file for each question.
3. Adjust the number of questions required for each section in the `main.js` file under the variable `difficulty_distribution`. This variable represents the distribution of questions across different difficulty levels. Modify the values according to your preferences for the easy, medium, and hard levels.
4. Execute the command `npm start`, in the directory's command prompt.

## 3. File Description 📂:
1. `main.js`: Orchestrates the generation of question papers based on predefined question banks and difficulty distributions.
2. `questionPaperGenerator.js`: Implements the logic for generating question papers, utilizing question banks and difficulty distributions.
3. `questionsStore.js`: Serves as a repository for pre-generated questions, each with attributes such as {question, subject, topic, difficulty, and marks}. Used for filtering during question paper generation.

## 4. Demo to run the application ✅:
1. Download the project directory in your system.
2. Open the directory.
3. Open Command Prompt (cmd) inside the main folder directory or run the terminal inside the VSCODE application.
4. Run the command `npm start`, and hit `Enter`.
5. A question paper will be generated as an output.
