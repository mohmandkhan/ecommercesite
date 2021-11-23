const name = 'Majid';
let age = 35;
const hasHobbies = true;

//This is wrong
//name= 'khan';

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is '+userName + ', age is '+userAge +', and the user has hobbies: '+ userHasHobby);
}

// const add =  (a,b) => {
//     return a+b;
// }

//shorter form of above
const add =  (a,b) => a+b;

//const addOne = (a) => a+1;
//OR
const addOne = a => a+1;

//If there is no aurgument
const addRandom = () => 1+2

console.log(addRandom())

console.log(addOne(1));

console.log(add(1,2));

console.log(summarizeUser(name, age, hasHobbies));