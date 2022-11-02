class Student {
    rollNo: number = 0;
    studentName: string = ''
    course: string = ''
    marks = {
        maths: 34,
        science: 34,
        history: 34,
        hindi: 34,
        english: 34
    }
    studentArray = [{
        rollNo: 0,
        studentName: '',
        course: '',
        marks: {
            maths: 35,
            science: 35,
            history: 35,
            hindi: 35,
            english: 35
        }
    }];
    studentData(rollNo: number, studentName: string, course: string, marks: { maths: number; science: number; history: number; hindi: number; english: number; }) {
        this.studentArray.push({ rollNo, studentName, course, marks });
    }
    printData() {
        for (let i = 1; i < this.studentArray.length; i++) {
            console.log(`Student Data is : ${this.studentArray[i].rollNo},${this.studentArray[i].studentName},${this.studentArray[i].course}, 
            \n And The Marks Are : ${this.studentArray[i].marks.history} , ${this.studentArray[i].marks.science}, ${this.studentArray[i].marks.english}, ${this.studentArray[i].marks.hindi},`);
        }
    }
    passOrFail(id: number) {
        let per = 0;

        if (this.studentArray[id].marks.english < 35) {
            console.log(`\n Student has Failed in English`)
        }
        else if (this.studentArray[id].marks.hindi < 35) {
            console.log(`\n Student has Failed in Hindi`)

        } else if (this.studentArray[id].marks.history < 35) {
            console.log(`\n Student has Failed in history`)

        } else if (this.studentArray[id].marks.maths < 35) {
            console.log(`\n Student has Failed in Maths`)

        } else if (this.studentArray[id].marks.science < 35) {
            console.log(`\n Student has Failed in science`)
        }
        else {
            console.log(`${this.studentArray[id].studentName} is Passed in all the Subject `)
        }
    }
}
const s1 = new Student();
const stud1 = s1.marks = {
    maths: 10,
    science: 100,
    hindi: 100,
    english: 45,
    history: 100
}
s1.studentData(1, 'ashwini', 'B.E', stud1)
const stud2 = s1.marks = {
    maths: 89,
    science: 100,
    hindi: 90,
    english: 56,
    history: 100
}
s1.studentData(2, 'Rutuja', 'B.E', stud2)
s1.printData();
s1.passOrFail(1);