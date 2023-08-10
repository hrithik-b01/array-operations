function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: Array with 0 or 1 element is already sorted
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot element
    const left = [];
    const right = [];

    for (const element of arr) {
        if (element < pivot) {
            left.push(element); // Elements smaller than the pivot go to the left
        } else if (element > pivot) {
            right.push(element); // Elements greater than the pivot go to the right
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort the left and right subarrays
}

const numbers = [4, 2, 8, 5, 1];
const sortedNumbers = quickSort(numbers);

console.log(sortedNumbers); // Output: [1, 2, 4, 5, 8]
