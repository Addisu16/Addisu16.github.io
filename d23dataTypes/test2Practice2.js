const propertyOrder=["one","two","Three"];
for(const property in propertyOrder){
    console.log(property);
}


const student1 = {
    studentId: 's101',
    quizAnswers: [1, 1, 2, 4]
  };
  
  const student2 = {
    studentId: 's102',
    quizAnswers: [2, 1, 2, 2]
  };
  
  const student3 = {
    studentId: 's103',
    quizAnswers: [3, 1, 3, 4]
  };
  
  const quiz = [student1, student2, student3];
  
  function collectAnswers(questionNum) {
    const answers = [];
    for (const student of quiz) {
      answers.push(student.quizAnswers[questionNum-1]);
    }
    return answers;
  }
  
  console.log(collectAnswers(3)); // outputs [2, 2, 3]
  