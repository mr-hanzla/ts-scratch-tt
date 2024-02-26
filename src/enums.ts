// list of related constants

// default values start from 0, 1, ...
enum Size { Small, Medium, Large }
let shirt: Size = Size.Large
console.log('shirt (large): ', shirt);
console.log('Size.Medium: ', Size.Medium);

// we can also set specific values
enum Size2 { Small = 1, Medium = 2, Large = 3 }
let pant = Size2.Large;
console.log('pant (large): ', pant);

// by giving a value to first one, other's values are set in increasing order
enum Size3 { Small = 1, Medium, Large }

// we can also specify string types 
enum Size4 { Small = 's', Medium = 'm', Large = 'l' }
let trouser: Size4 = Size4.Medium
console.log('trouser (medium): ', trouser)

// we can define different types of values within enums
enum Size5 { Kid = 0, Small = 's', Medium = 'm', Large = 'l' }
let shoe: Size5 = Size5.Kid
console.log('shoe (kid): ', shoe);
shoe = Size5.Medium
console.log('shoe (medium): ', shoe)

