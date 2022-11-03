function calculateGrades(marks) {
  let sum = 0
  for (const value of marks) {
    sum = sum + value;
  }

  avg = sum / marks.length

  if (avg >= 0 && avg <= 70) {
    return (`Grade: D`)
  }
  if (avg <= 70 && avg >= 79) {
    return (`Grade: C`)
  }
  if (avg >= 81 && avg <= 89) {
    return (`Grade: B`)
  }
  if (avg >= 91 && avg <= 100) {
    return (`Grade: A`)
  }
}
