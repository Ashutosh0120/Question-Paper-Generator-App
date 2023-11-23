const chalk = require("chalk");
const question_bank = require("./questionStore");
const Paper_Generate = require("./questionPaperGenerator");
const total_marks = 100;
const difficulty_distribution = {
  easy: 10,
  medium: 10,
  hard: 3,
};
const question_paper = Paper_Generate(
  question_bank,
  total_marks,
  difficulty_distribution
);
const Question_Set = groupQuestionsByDifficulty(question_paper);

console.log(chalk.bold.green("\n Question Paper:"));
Question_Set.forEach((group, groupIndex) => {
  console.log(chalk.bold(`\nSection ${groupIndex + 1} (${group[0].difficulty}):`));
  const table_data = group.map(
    ({question, subject, topic, marks},index) => ({
      Index: chalk.blue(index + 1),
      Question: question,
      Subject: subject,
      Topic: topic,
      Marks: marks,
    })
  );
  const transformed = table_data.reduce((unique, { Index, ...x }) => {
    unique[Index] = x;
    return unique;
  }, {});
  console.table(transformed, ["Question", "Subject", "Topic", "Marks"]);
});
function groupQuestionsByDifficulty(questions) {
  const Question_Set = {};
  questions.forEach((question) => {
    if (!Question_Set[question.difficulty]) {
      Question_Set[question.difficulty] = [];
    }
    Question_Set[question.difficulty].push(question);
  });
  return Object.values(Question_Set);
}