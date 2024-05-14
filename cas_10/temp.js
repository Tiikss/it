const numbers=[1, 17, 8, 9, 10, 16, 21, 12];
const newArray=numbers.map((val, ind) => val*ind );
const evenNumbers=numbers.filter(val => val%2==0);
// const sortedArray=numbers.sort((a, b) => {
//     if(a>b)
//         return 1;
//     else if(a==b)
//         return 0;
//     return -1;
// });
const sortedArray=numbers.sort((a, b) => a-b);

console.log(sortedArray);