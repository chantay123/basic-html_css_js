// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216

// sumOfCubes([2]) ➞ 8

// sumOfCubes([]) ➞ 0


let a :number[]  = [1,5,9];
let sum:number = 0;

for(let i=0 ;i < a.length ;i++ ){
    sum += Math.pow(a[i],3);
    console.log(sum);
};