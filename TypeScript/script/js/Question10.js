var Student = /** @class */ (function () {
    function Student() {
        this.rollNo = 0;
        this.studentName = '';
        this.course = '';
        this.marks = {
            maths: 34,
            science: 34,
            history: 34,
            hindi: 34,
            english: 34
        };
        this.studentArray = [{
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
    }
    Student.prototype.studentData = function (rollNo, studentName, course, marks) {
        this.studentArray.push({ rollNo: rollNo, studentName: studentName, course: course, marks: marks });
    };
    Student.prototype.printData = function () {
        for (var i = 1; i < this.studentArray.length; i++) {
            console.log("Student Data is : ".concat(this.studentArray[i].rollNo, ",").concat(this.studentArray[i].studentName, ",").concat(this.studentArray[i].course, ", \n            \n And The Marks Are : ").concat(this.studentArray[i].marks.history, " , ").concat(this.studentArray[i].marks.science, ", ").concat(this.studentArray[i].marks.english, ", ").concat(this.studentArray[i].marks.hindi, ","));
        }
    };
    Student.prototype.passOrFail = function (id) {
        var per = 0;
        if (this.studentArray[id].marks.english < 35) {
            console.log("\n Student has Failed in English");
        }
        else if (this.studentArray[id].marks.hindi < 35) {
            console.log("\n Student has Failed in Hindi");
        }
        else if (this.studentArray[id].marks.history < 35) {
            console.log("\n Student has Failed in history");
        }
        else if (this.studentArray[id].marks.maths < 35) {
            console.log("\n Student has Failed in Maths");
        }
        else if (this.studentArray[id].marks.science < 35) {
            console.log("\n Student has Failed in science");
        }
        else {
            console.log("".concat(this.studentArray[id].studentName, " is Passed in all the Subject "));
        }
    };
    return Student;
}());
var s1 = new Student();
var stud1 = s1.marks = {
    maths: 10,
    science: 100,
    hindi: 100,
    english: 45,
    history: 100
};
s1.studentData(1, 'ashwini', 'B.E', stud1);
var stud2 = s1.marks = {
    maths: 89,
    science: 100,
    hindi: 90,
    english: 56,
    history: 100
};
s1.studentData(2, 'Rutuja', 'B.E', stud2);
s1.printData();
s1.passOrFail(1);
