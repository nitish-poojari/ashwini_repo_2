function display(tuple: any[]) {
    let sum = 0
    for (let i = 0; i < tuple.length; i++) {
        sum += tuple[i]
    }
    return sum
}