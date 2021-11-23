const name = 'Majid';
let age = 35;
const hasHobbies = true;

//This is wrong
//name= 'khan';

age = 30;

function summarizeUser(userName, userAge, userHasHobby){
    return ('Name is '+userName + ', age is '+userAge +', and the user has hobbies: '+ userHasHobby);
}

console.log(summarizeUser(name, age, hasHobbies));