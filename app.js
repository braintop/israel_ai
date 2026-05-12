let arr = [1, 2, 3, 4, 5];

let arr2=[];
for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
}
console.log(arr2);

let arr3 = arr.map(item => item * 2);
console.log(arr3);  

let arr4 = arr.filter(item => item % 2 === 0);