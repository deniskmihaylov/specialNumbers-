function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let numAsString = i.toString();
    sum = 0;
    for (let j = 0; j < numAsString.length; j++) {
      let curChar = numAsString[j];
      let charToNum = Number(curChar);
      sum += charToNum;
    }

    let isSpecial = (sum === 5 || sum === 7 || sum === 11)
    console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`)
  }
}

specialNumbers(15);
