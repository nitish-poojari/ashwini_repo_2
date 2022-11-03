function sum0fMultiples(n1) {
    let sum = 0
    for (let i = 1; i <= n1; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            sum = sum + i
    }
    return (sum)
}