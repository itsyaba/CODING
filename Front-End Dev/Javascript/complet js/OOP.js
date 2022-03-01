// "use strict";

// const Person = function(first_name ,birth_year){
//     this.first_name = first_name;
//     this.birth_year = birth_year;    

// }

// const yaba = new Person('YABA', 1995);
// const yabu = new Person('YABU' , 2003);
// const yaba_hane = new Person('YABAHANE' , "BOSS")
// console.log(yaba);
// console.log(yabu);
// console.log(yaba_hane);
// console.log(yabu instanceof Person);
// // console.log(Person);
// Person.prototype.calc_age = function(){
//     console.log(2022 - this.birth_year);
// };

// yabu.calc_age();

// // Factory Function
// function create_circle(radius){
//     return {
//         radius, //radius = radius
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

// // Constructor Function
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//         this.draw = function () {
//             console.log('draw');
//         };
//     }
// }

// const another = new Circle(1);

// // console.log(another(1 ));



class Pizza {
    constructor() {
        this.size = 'size';
        this.crust = 'crust';
    }
    bake() {
        console.log("Backing a  " ,  this.size , this.crust);
        console.log("yaba");
    }
}

const mypizza = new Pizza();
mypizza.bake();
mypizza.size;