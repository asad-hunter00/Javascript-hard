for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBazz");

    } else if (i % 3 === 0) {
        console.log("Fizz");

    } else if (i % 5 === 0) {
        console.log("Bazz");

    } else {
        console.log(i);

    }
}





const person = {
    name: "Ali",
    age: 25,
    city: "Toshkent",
    married: false
};

for (let key in person) {
    if (typeof person[key] == "string") {
        console.log(person[key]);
    }

}





const users = [
    { name: "Sara", active: true },
    { name: "Bob", active: false },
    { name: "Tom", active: true }
];



const filtered = users.filter(user => user.active === true)

console.log(filtered);







const nums = [1, 2, 3, 4, 5];


const newArr = nums.map(num => num * num)
const newFil = nums.filter(num => num % 2 === 0)

console.log(newArr);
console.log(newFil);






const keys = ['name', 'age'];
const values = ['Ali', 25];


const newObj = keys.reduce((obj, key, index) => {
    obj[key] = values[index];

    return obj
}, {})

console.log(newObj);






const sentence = "JavaScript is fun to learn."


const letter = sentence.split(" ")

console.log(letter.length);







const email = "user@example.com"


if (email.includes("@") && email.includes(".")) {
    console.log("Email togri");

} else {
    console.log("email notgori");

}

console.log(email);





const str = "raceca"


const view = str.split("").reverse().join("")

console.log(str === view);





const input = "JavaScript is amazing"


const res = input.replaceAll("a", "@")


console.log(res);





const start = new Date("2025-01-01");
const end = new Date("2025-01-05");

const diff = end - start;

console.log(diff);

