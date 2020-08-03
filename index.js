function countDown(startingNum) {
  for (let i = startingNum; i >= 0; i--) {
    console.log(i);
  }
}

function writeCards(names, message) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
  }
  return results;
}