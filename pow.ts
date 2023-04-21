import {createHash} from 'crypto'
const base = '<YourMessage>'
function hash(string: string) {
  return createHash('sha256').update(string).digest('hex');
}
function score(nonce: number): number {
  let currentScore = 0
  const hashed = hash(base + nonce)
  for (let i = 0; i < hashed.length; i++) {
    const bin = parseInt(hashed[i], 16).toString(2)
    if (bin === '0') {
      currentScore += 4
    } else {
      currentScore += 4 - bin.length
      return currentScore
    }
  }
  return currentScore
}

let highestNonce = 0
let highestScore = 0
for (let i = 0; i < 10_000_000_000; i++) { // The probability that a score >= 30 in this range is more than 99%!
  const currentScore = score(i)
  if (currentScore > highestScore) {
    highestNonce = i, highestScore = currentScore
    console.log(`the highest nonce is updated to ${highestNonce} with score of ${highestScore}`)
  }
}

console.log(`the highest nonce is ${highestNonce} with score of ${highestScore}`)
