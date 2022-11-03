const n = 20
let tag = document.createElement("p");
let prime = 2;
let flag1 = document.getElementById("twelve").innerHTML
function showPrimeNumbers(num) {
    for (let i = 2; i <= num; i++) {
        let flag = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1
            }
        }
        if (flag == 0) {
            document.write(`Prime Number : ${i} <br>`);
        }
    }
}
