const myobj = {
    name: "yaba",
    logname: function () {
        console.log(this.name);
    }
};

const myarr = ['eat' ,'sleep' , 'CODE']

// sessionStorage.setItem("MySStorage", myobj)
localStorage.setItem("MySStorage", JSON.stringify(myobj));
sessionStorage.setItem("MySStorage", JSON.stringify(myobj));
const mynewSStorage = JSON.parse(sessionStorage.getItem("MySStorage"));
console.log(mynewSStorage);

