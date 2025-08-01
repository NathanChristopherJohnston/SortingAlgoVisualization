// console.log("*********************")
// console.log("*Bubble Sort Testing*")
// console.log("*********************\n");

// // random example
// let randomNums: number[] = new Array<number>();

// for (let i = 0; i < 5; i++) {
//     randomNums.push(Math.floor(Math.random() * 100));
// }

// console.log("Random Numbers: " + randomNums);
// let randomSorted = bubbleSort(randomNums);
// console.log("Sorted Random Numbers: " + randomSorted);

// // Sorted example
// let sortedNums:number[] = [1, 2, 3, 4, 5];
// console.log("\nSorted Numbers before: " + sortedNums);
// let sortedSorted = bubbleSort(sortedNums);
// console.log("Sorted Numbers after: " + sortedSorted);

// // Reverse Sorted example
// let reverseSortedNums:number[] = [5, 4, 3, 2, 1];
// console.log("\nReverse Sorted Numbers before: " + reverseSortedNums);
// let reverseSorted = bubbleSort(reverseSortedNums);
// console.log("Reverse Sorted Numbers after: " + reverseSorted);

// // empty array example
// let emptyArrayNums:number[] = [];
// console.log("\nEmpty Array Numbers before: " + emptyArrayNums);
// let emptyArraySorted = bubbleSort(emptyArrayNums);
// console.log("Empty Array Numbers after: " + emptyArraySorted);

// // single element example
// let singleElementNums:number[] = [1];
// console.log("\nSingle Element Numbers before: " + singleElementNums);
// let singleElementSorted = bubbleSort(singleElementNums);
// console.log("Single Element Numbers after: " + singleElementSorted);

// // double element example
// let doubleElementNums:number[] = [9, 7];
// console.log("\nDouble Element Numbers before: " + doubleElementNums);
// let doubleElementSorted = bubbleSort(doubleElementNums);
// console.log("Double Element Numbers after: " + doubleElementSorted);

// let duplicateElementNums: number[] = [3, 1, 2, 3, 2, 1];
// console.log("\nDuplicate Element Numbers before: " + duplicateElementNums);
// let duplicateElementSorted = bubbleSort(duplicateElementNums);
// console.log("Duplicate Element Numbers after: " + duplicateElementSorted);

// console.log("\n********************")
// console.log("*Quick Sort Testing*")
// console.log("********************\n");

// // random example
// randomNums = new Array<number>();

// for (let i = 0; i < 5; i++) {
//     randomNums.push(Math.floor(Math.random() * 100));
// }

// console.log("Random Numbers: " + randomNums);
// randomSorted = quickSort(randomNums);
// console.log("Sorted Random Numbers: " + randomSorted);

// // Sorted example
// sortedNums = [1, 2, 3, 4, 5];
// console.log("\nSorted Numbers before: " + sortedNums);
// sortedSorted = quickSort(sortedNums);
// console.log("Sorted Numbers after: " + sortedSorted);

// // Reverse Sorted example
// reverseSortedNums = [5, 4, 3, 2, 1];
// console.log("\nReverse Sorted Numbers before: " + reverseSortedNums);
// reverseSorted = quickSort(reverseSortedNums);
// console.log("Reverse Sorted Numbers after: " + reverseSorted);

// // empty array example
// emptyArrayNums = [];
// console.log("\nEmpty Array Numbers before: " + emptyArrayNums);
// emptyArraySorted = quickSort(emptyArrayNums);
// console.log("Empty Array Numbers after: " + emptyArraySorted);

// // single element example
// singleElementNums = [1];
// console.log("\nSingle Element Numbers before: " + singleElementNums);
// singleElementSorted = quickSort(singleElementNums);
// console.log("Single Element Numbers after: " + singleElementSorted);

// // double element example
// doubleElementNums = [9, 7];
// console.log("\nDouble Element Numbers before: " + doubleElementNums);
// doubleElementSorted = quickSort(doubleElementNums);
// console.log("Double Element Numbers after: " + doubleElementSorted);

// // duplicate elements example
// duplicateElementNums = [3, 1, 2, 3, 2, 1];
// console.log("\nDuplicate Element Numbers before: " + duplicateElementNums);
// duplicateElementSorted = quickSort(duplicateElementNums);
// console.log("Duplicate Element Numbers after: " + duplicateElementSorted);

// console.log("\n******************")
// console.log("*Testing complete*");
// console.log("******************\n");

// Bubble Sort Implementation
type BubbleSortStep = {
    arr: number[];
    compare1: number;
    compare2: number;
    swapped: boolean;
};

// A bubble sort implementation that returns an array of steps for display with D3.js
function bubbleSort(arr: number[]): BubbleSortStep[] {
    let lastIndex = arr.length - 1;
    let sortSteps: BubbleSortStep[] = [];
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
