class Quiz {
    constructor() {
        this.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "e" }] },
        { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
        { sid: 12, answers: [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] }];
        this.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];
    }
    histogram() {
        let histogram = [];
        for (let answer of this.key) {
            const correctAnswer = answer.ans;
            const questionId = answer.qid;
            let correctScore = 0;
            for (let student of this.students) {
                const studentAnswer = this.findAnswerByQuestionId(student, questionId);
                if (studentAnswer == correctAnswer) {
                    correctScore++;
                }
            }
            histogram.push({ qid: answer.qid, correctsid: this.student.sid });
        }
        return histogram;
    }
    findAnswerByQuestionId(student, questionId) {
        return student.answers.find(studentAns => studentAns.qid == questionId).ans;
    }
}
console.log(new Quiz().histogram());

