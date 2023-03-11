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


let arr1 = ["I", "study", "JavaScript"];
arr1.splice(1, 1); // from index 1 remove 1 element
console.log( arr1 ); // ["I", "JavaScript"]

  let arr = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");
console.log( arr ) // now ["Let's", "dance", "right", "now"]

let arr3 = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arr3.splice(0, 2);
console.log(arr3 ); // "I", "study" <-- array of removed elements

["Bilbo", "Gandalf", "Nazgul"].forEach(function(character){console.log(character)} );
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
console.log (`${item} is at index ${index} in ${array}`);
});

let codes = {
  name1:"Addisu",
  age:27,
  profession:"software engineers",
};

for(const key in codes){
  console.log(codes[key]);
}

