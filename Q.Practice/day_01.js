// // Q.no. 1-  Print all even number from 0-100 . By the help of a for loop.

// function printArr(num){
//     const  a1 = [];
//     for (let i = 1; i <= 100; i++) {
//         if(i%num===0){
//             a1.push(i);
//         } 
//     }
//     return a1;
// }
// const result = printArr(5)
// console.log (  result )
//    Q.no - 2 - console sum of all integers in a given array . [ 1, 3, 4, 5, 7, 8, 9]

let a = [ 1, 3, 4, 5, 7, 8, 9 ]
const red = (arr) => {
    let result =0;
    for(let i =0;i<arr.length;i++){
        result+=arr[i];    }
    return result;
}
console.log (red(a));

// Q . no. 3 -  "ankush", Convert this string into "Ankush" and "AnkusH" 

// let b = "Ankush"
// console.log (b.length)
// console.log (b.toLocaleUpperCase())
// console.log (b.toLocaleLowerCase())
// console.log (b.replace("h", "H"))



//   Q.no - 4 - console smallest and biggest integer in given aaray [ 1, 3, 4, 5, 7, 8, 9 ] .
// const arr = [ 1, 3, 5, 6, 9, 7, 4 ] ;
// const smallest = Math.min(...arr) ;
// const biggest = Math.max(...arr) ;

// console.log ("Smallest:" , smallest) ;
// console.log ("Biggest:" , biggest) ;

