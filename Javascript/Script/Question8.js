function findMin(numbers1) {
    let min = numbers1[0]
    for (let i = 0; i < numbers1.length; i++) {
        if (numbers1[i] < min) {
            min = numbers1[i]
        }
    }
    return (min)
}
