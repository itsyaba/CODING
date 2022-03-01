        /**AREA CALCULATOR */
// alert("welcome to area calculator");
// const base = prompt("Enter The Base Here");
// const height = prompt("Enter The Height Here");

// const area = (0.5 * base * height);

        /**DRIVING LIS */
const enter_year = new Date;
// const this_year = enter_year.getFullYear();
// const year_born = Number( 2010);

// // console.log(typeof(enter_year));
// // console.log(typeof(this_year));
// // console.log(typeof(year_born));

// const result = this_year - year_born;
// console.log(result);

// if (result >= 18) {
//     console.log("You can drive now");
// } else {
//     console.log("You can't drive");
// }

        /**HUMAN READABEL TIME FORMAT */
const this_year = enter_year.getFullYear();
const this_month = enter_year.getMonth();
const this_day = enter_year.getDay();

console.log(`${this_year}/${this_month}/${this_day}`)
console.log(`${this_day}/${this_month}/${this_year}`)
console.log(`${this_day}-${this_month}-${this_year}`)
