const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [10, 20, 30, 40, 50];
const arr3 = [1, 3, 5, 7, 9];
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Tổng arr1 =", sumArray(arr1));
console.log("Tổng arr2 =", sumArray(arr2));
console.log("Tổng arr3 =", sumArray(arr3));