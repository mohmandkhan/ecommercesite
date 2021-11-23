const hobbies = ['Sports','Cooking'];

//const copiedArray = hobbies.slice();

const copiedArray = [...hobbies, 'cleaning'];

console.log(copiedArray)

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3));

const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2)