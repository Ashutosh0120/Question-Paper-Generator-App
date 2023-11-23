function generatePaper(Question_Store, total_marks, difficulty_distribution) {
  const question_paper = [];
 
  const Easy_Count = Math.ceil(difficulty_distribution.easy * (total_marks / 100));
  const Medium_Count = Math.ceil(difficulty_distribution.medium * (total_marks / 100));
  const Hard_Count = Math.ceil(difficulty_distribution.hard * (total_marks / 100));

  const Easy_Ques = Question_Store.filter((question) => question.difficulty === "Easy");
  const Medium_Ques = Question_Store.filter((question) => question.difficulty === "Medium");
  const Hard_Ques = Question_Store.filter((question) => question.difficulty === "Hard");

  function Add_Random_Questions(data, count) {
    let questions = data;
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      question_paper.push(questions[randomIndex]);
      questions = questions.filter((_, idx) => idx !== randomIndex);
    }
  }
  Add_Random_Questions(Easy_Ques, Easy_Count);
  Add_Random_Questions(Medium_Ques, Medium_Count);
  Add_Random_Questions(Hard_Ques, Hard_Count);
  return question_paper;
}
module.exports = generatePaper;