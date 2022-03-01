const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = new Array(text)

console.log(typeof(words))

// console.log(typeof)
const wordss = words.join(".")

console.log(typeof(words))

// const sp_wordss = wordss.splice('o')
console.log(wordss)
console.log(wordss.length)
