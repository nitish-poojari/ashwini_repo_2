let tag1 = document.createElement("p");
let flag = document.getElementById("fourteen").innerHTML
function showPattern(num) {
    let string = ''
    for (let index = 1; index <= num; index++) {
        for (let index1 = 0; index1 < index; index1++) {
            document.write('*')
        }
        document.write('<br/>')
    }
}
