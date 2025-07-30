"use strict";
console.log("*********************");
console.log("*Bubble Sort Testing*");
console.log("*********************\n");
// random example
let randomNums = new Array();
for (let i = 0; i < 5; i++) {
    randomNums.push(Math.floor(Math.random() * 100));
}
console.log("Random Numbers: " + randomNums);
let randomSorted = bubbleSort(randomNums);
console.log("Sorted Random Numbers: " + randomSorted);
// Sorted example
let sortedNums = [1, 2, 3, 4, 5];
console.log("\nSorted Numbers before: " + sortedNums);
let sortedSorted = bubbleSort(sortedNums);
console.log("Sorted Numbers after: " + sortedSorted);
// Reverse Sorted example
let reverseSortedNums = [5, 4, 3, 2, 1];
console.log("\nReverse Sorted Numbers before: " + reverseSortedNums);
let reverseSorted = bubbleSort(reverseSortedNums);
console.log("Reverse Sorted Numbers after: " + reverseSorted);
// empty array example
let emptyArrayNums = [];
console.log("\nEmpty Array Numbers before: " + emptyArrayNums);
let emptyArraySorted = bubbleSort(emptyArrayNums);
console.log("Empty Array Numbers after: " + emptyArraySorted);
// single element example
let singleElementNums = [1];
console.log("\nSingle Element Numbers before: " + singleElementNums);
let singleElementSorted = bubbleSort(singleElementNums);
console.log("Single Element Numbers after: " + singleElementSorted);
// double element example
let doubleElementNums = [9, 7];
console.log("\nDouble Element Numbers before: " + doubleElementNums);
let doubleElementSorted = bubbleSort(doubleElementNums);
console.log("Double Element Numbers after: " + doubleElementSorted);
let duplicateElementNums = [3, 1, 2, 3, 2, 1];
console.log("\nDuplicate Element Numbers before: " + duplicateElementNums);
let duplicateElementSorted = bubbleSort(duplicateElementNums);
console.log("Duplicate Element Numbers after: " + duplicateElementSorted);
console.log("*********************");
console.log("*Quick Sort Testing*");
console.log("*********************\n");
// random example
randomNums = new Array();
for (let i = 0; i < 5; i++) {
    randomNums.push(Math.floor(Math.random() * 100));
}
console.log("Random Numbers: " + randomNums);
randomSorted = quickSort(randomNums);
console.log("Sorted Random Numbers: " + randomSorted);
// Sorted example
sortedNums = [1, 2, 3, 4, 5];
console.log("\nSorted Numbers before: " + sortedNums);
sortedSorted = quickSort(sortedNums);
console.log("Sorted Numbers after: " + sortedSorted);
// Reverse Sorted example
reverseSortedNums = [5, 4, 3, 2, 1];
console.log("\nReverse Sorted Numbers before: " + reverseSortedNums);
reverseSorted = quickSort(reverseSortedNums);
console.log("Reverse Sorted Numbers after: " + reverseSorted);
// empty array example
emptyArrayNums = [];
console.log("\nEmpty Array Numbers before: " + emptyArrayNums);
emptyArraySorted = quickSort(emptyArrayNums);
console.log("Empty Array Numbers after: " + emptyArraySorted);
// single element example
singleElementNums = [1];
console.log("\nSingle Element Numbers before: " + singleElementNums);
singleElementSorted = quickSort(singleElementNums);
console.log("Single Element Numbers after: " + singleElementSorted);
// double element example
doubleElementNums = [9, 7];
console.log("\nDouble Element Numbers before: " + doubleElementNums);
doubleElementSorted = quickSort(doubleElementNums);
console.log("Double Element Numbers after: " + doubleElementSorted);
// duplicate elements example
duplicateElementNums = [3, 1, 2, 3, 2, 1];
console.log("\nDuplicate Element Numbers before: " + duplicateElementNums);
duplicateElementSorted = quickSort(duplicateElementNums);
console.log("Duplicate Element Numbers after: " + duplicateElementSorted);
console.log("Sorting complete.\n");
// Bubble Sort Implementation
function bubbleSort(arr) {
    let lastIndex = arr.length - 1;
    // edge case for empty array
    if (lastIndex < 0) {
        return arr;
    }
    // i represents the number of sorted indexes starting at 0
    for (let i = 0; i < lastIndex; i++) {
        // j represents the current index being compared
        for (let j = 0; j < lastIndex - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Quick Sort Implementation
function quickSort(arr) {
    // base case for recursion
    if (arr.length <= 1) {
        return arr;
    }
    // choose a pivot element
    let pivotIndex = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];
    // partition the array into left and right arrays
    for (let i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
