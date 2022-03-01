const myobj = {
    name: "YABA",
    age: 18,
    is_student: true,
    hobbies: ["eat", "code", "sleep"],
    hello: function () {
        console.log("YABA")
    }
};

console.log(myobj.is_student);

const sent_json = JSON.stringify(myobj);

console.log(sent_json);

const recive_json = JSON.parse(sent_json);

console.log(recive_json);