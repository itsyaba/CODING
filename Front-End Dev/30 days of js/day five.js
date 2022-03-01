// Ways to constract new arrays

// const arr = Array()
// const arr = new Array()
// const arr = []

const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const appTechs = ['flutter' , 'React-Native' , 'swift' , 'kotiln' , 'java']

let js = "javascript"
const spjs = js.split('')

console.log(webTechs[0])
const last_index = webTechs.length - 1;
console.log(webTechs[last_index]);

const techs = webTechs.concat(appTechs)
console.log(techs.indexOf('flutter'));
console.log(techs[7]);

console.log(techs.includes('Python')); //true or false 

const str_techs = techs.toString()
console.log(typeof (str_techs))

console.log(webTechs.join("#")) //Separate them by #
console.log(webTechs.slice(2)); //Start from two
console.log(webTechs.slice(2 , 5));
