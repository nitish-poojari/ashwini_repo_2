function pangrams(s) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var lowercase = s.toLowerCase();
    for (var i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) < 0) {
            return ("\"".concat(s, "\" is not a panagram"));
        }
    }
    return ("\"".concat(s, "\" is a pangram"));
}
