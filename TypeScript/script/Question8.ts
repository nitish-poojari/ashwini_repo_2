function pangrams(s: string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const lowercase = s.toLowerCase()
    for (let i = 0; i < alphabet.length; i++) {
        if (lowercase.indexOf(alphabet[i]) < 0) {
            return (`"${s}" is not a panagram`)
        }
    }
    return (`"${s}" is a pangram`)
}