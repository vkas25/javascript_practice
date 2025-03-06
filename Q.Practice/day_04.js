let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break; case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wenesday";
        break;
    case 4:
        day = "Thursday"
        break;
    case 5:
        day = "Friday"
        break;
    case 5:
        day = "Saturday"

}
console.log("Today is " + day);
// console.log ("Yesterday is " + day ) ;

/*
// for loop
const cars = [ "BMW", "Volvo", "saab", "Ford", "Fiat", "Audi"]
// let text = " ";
for (let i = 0; i < cars.length; i++) 
//     {
//     text += cars [ i ]  ;
// }
// console.log(text);
console.log( cars[i] );
console.log( cars );
*/
/*
for (let i = 0; i<11; i++) 

    console.log("The number is " + i)
    */
/*
    let i =5 ;
    for (let i= 0; i < 10; i++ );
console.log(i) ; 
*/
let txt = "";
const person = { fname: "John", lname: "Doe", age: 25, mob: 123456789 };
for (let x in person)
    txt += (person[x] + " ");
console.log(txt)

let numbers = [45, 4, 9, 16, 25];
// for (const x in numbers) 
// console.log (numbers[x])

/*
function sortDecreasing(numbers) {
    for (i = 0; i < numbers.length; i++) {
        // console.log
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                let temp = numbers(i);
                numbers(i) = numbers(j);
                numbers(j) = temp;
            }
        }
    }
}
console.log(numbers)    */

for (let i = 10; i>0; i--)
    console.log(i)