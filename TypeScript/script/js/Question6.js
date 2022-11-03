var tag = document.createElement("p");
var flag1 = document.getElementById("six").innerHTML;
function factorial(n) {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}
function main() {
    for (var i = 1; i <= 20; i++) {
        var output = factorial(i);
        document.write("".concat(output, " <br>"));
    }
}
