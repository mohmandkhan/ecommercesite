const person = {
    name: 'Majid',
    age: 34,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

person.greet();



//Object destructuring
const printName = ({name}) => {
    console.log(name)
}
printName(person)
const {name, age} = person;

console.log(name, age)