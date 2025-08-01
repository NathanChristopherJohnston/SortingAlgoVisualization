"use strict";
// console.log("*********************")
// console.log("*Bubble Sort Testing*")
// console.log("*********************\n");
// A bubble sort implementation that returns an array of steps for display with D3.js
function bubbleSort(arr) {
    let lastIndex = arr.length - 1;
    let sortSteps = [];
    let workingArr = [...arr];
    // edge case for an empty array
    if (lastIndex < 0) {
        return [{ arr: [...workingArr], compare1: 0, compare2: 0, swapped: false }];
    }
    for (let i = 0; i < lastIndex; i++) {
        for (let j = 0; j < lastIndex - i; j++) {
            let swapped = false;
            if (workingArr[j] > workingArr[j + 1]) {
                // Swap elements
                let temp = workingArr[j];
                workingArr[j] = workingArr[j + 1];
                workingArr[j + 1] = temp;
                swapped = true;
            }
            sortSteps.push({ arr: [...workingArr], compare1: j, compare2: j + 1, swapped });
        }
    }
    return sortSteps;
}
// // Quick Sort Implementation
// function quickSort(arr: number[]): number[] {
//     // base case for recursion
//     if (arr.length <= 1) {
//         return arr;
//     }
//     // choose a pivot element
//     let pivotIndex = Math.floor(Math.random() * arr.length);
//     let pivot = arr[pivotIndex];
//     let left: number[] = [];
//     let right: number[] = [];
//     // partition the array into left and right arrays
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== pivotIndex) {
//             if (arr[i] < pivot) {
//                 left.push(arr[i]);
//             } else {
//                 right.push(arr[i]);
//             }
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// }
