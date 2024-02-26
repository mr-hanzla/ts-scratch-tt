let numbers: number[] = [1, 2, 3]; // type is infered 
let _numbers = [1, 2, 3];

let dynamic_list: any[] = [1, 2, '3'] // array having multiple types of data
let _dynamic_list: (string | number)[] = [1, 2, '3']
// array can have multiple type of value, if not mentioned then 'any[]' type is inferred
let __dynamic_list = [1, 2, '3', { name: 'Checking' }, (a:number)=> { return a**2 }]

