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
            let correctScore = 0;
            for (let i = 0; i < this.students.length; i++) {
                if (this.students[i].answers.find(ans => ans.qid == answer.qid).ans === answer.ans) {
                    correctScore++;
                }
            }
            histogram.push({ qid: answer.qid, numCorrect: correctScore });
        }
        
        return histogram;
    }
}
console.log(new Quiz().histogram());