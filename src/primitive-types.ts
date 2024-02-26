// NOTE: You can hover to check variable type

// number
let age: number = 25; // type is specified
let _age = 25; // without annotation, type is inferred

console.log(age);
console.log(_age);

// string
let mode: string = 'Grinding Mode'; // type is specified
let _mode = 'Grinding Mode' // type is inferred

console.log(mode);
console.log(_mode);

// boolean
let is_available: boolean = true; // type is specified
let _is_available = false // type is inferred

console.log(is_available);
console.log(_is_available)

// any
let learning; // if not initialized, 'any' type is infered

learning = true; // value of a specific type can be specified later
console.log('learning: ', learning);

learning = 'TypeScript tutorial'; // value of different type can be assigned to 'any' variable
console.log('learning: ', learning);

// unknown
// never
// enum
// tuple
