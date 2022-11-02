function translate(str) {
    var newStr = " ";
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            newStr = newStr + str[i];
        }
        else if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u') {
            newStr = newStr + str[i] + 'o' + str[i];
        }
        else {
            newStr = newStr + str[i];
        }
    }
    return newStr;
}
