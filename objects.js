const object1 = {}; //object literal
const object2 = new Object();

const person = {
    "name": "Papp Zsombor",
    birthYear: 2003,
    "Oktatási azonosító": 72358325324,
    hello(){
        console.log(`Helló, ${this.name}`)
    }
}

console.table(person);

console.log(person.name);
console.log(person["birthYear"])

person.birthYear = 2005;

console.log(person["birthYear"])

person["dogs"] = ["Bodri", "Frakk"];

console.table(person);

delete person.dogs;

console.table(person);

const direction = Object.freeze({
    North: 0,
    East: 1,
    South: 2,
    West: 3
})

console.table(direction)

//direction.North=20;

console.table(direction)

console.log(Object.isSealed(direction), Object.isFrozen(direction), Object.isExtensible(direction))

for(const key in person){
    console.log(key, person[key]);
}

for(const key of Object.keys(person)){
    console.log(key);
}

for(const value of Object.values(person)){
    console.log(value);
}

for (const entry of Object.entries(person)){
    console.table(entry);
}

const object = Object.fromEntries([
    ["user", "asdf"],
    ["xp", 535]
]);

console.table(object);

function personFactory(name, age){
    return {
        name,
        age,
        hello(){
            console.log(`Hello, ${this.name}`)
        }
    }
}

const aladar = personFactory("Németh Aladár", 18);

console.table(aladar);

function userConstructor(username,xp){
    this.username = username;
    this.xp = xp;
}

const user1 = new userConstructor("user1",70);

console.table(user1);


person.hello();

aladar.hello();
const xp = "xp"
console.log(person.hasOwnProperty("xp"));
