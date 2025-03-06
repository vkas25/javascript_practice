//  Q. 1 -  ascending =[1,3,4,5,6,7,9];

// let a =[1,3,4,5,6,7,9];
// a.sort ( (a, b ) => a - b )
// console.log( a ) ;

//  Q. 2 - deascending =[1,3,4,5,6,7,9];

// let b =[9,7,6,5,4,3,1]; 
// b.sort ( (a, b ) => b - a ) 
// console.log ( b )

// Sample array
let arr = [5, 2, 9, 1, 5, 6];

// Function to sort array in increasing order
function sortIncreasing(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log("here");
        console.log("i", i);
        for (let j = i + 1; j < arr.length; j++) {
            console.log("inside");
            console.log("j", j)
            if (arr[i] > arr[j]) { 
                // Swap if element at i is greater than element at j
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
// console.log(sortIncreasing(arr))
// // Function to sort array in decreasing order
// function sortDecreasing(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 // Swap if element at i is less than element at j
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// // Test the functions
// console.log("Original array:", arr);

// sortIncreasing(arr);
// console.log("Array sorted in increasing order:", arr);

// sortDecreasing(arr);
// console.log("Array sorted in decreasing order:", arr);

//  Q. 3 - String ko array me convert karna he lekin sabhi letter capital hone chahiye

let str = "vikas Yadav" ;
let uppercaseArray = str.toUpperCase().split ('') ;          // // Convert string to array and make all letters uppercase
// console.log ( uppercaseArray) ;


let a= 5 ;
let b= 6 ;
// let c = 9;
// [a, b ] = [ b, a ] ;
// console.log(a) ;
// console.log(b) ;

// let temp = a;
// a=b;
// b=temp;

a = a+b; // 11
b=a-b;  //5
a=a-b;

// console.log(a);
// console.log(b)

for(let i=0; i<8;i++){
    console.log(i)
        for(let j =i;j<10;j++){console.log(j)}
}