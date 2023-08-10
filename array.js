function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap arr[i] and arr[minIndex]
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

const numbers = [4, 2, 8, 5, 1];
selectionSort(numbers);

console.log(numbers); // Output: [1, 2, 4, 5, 8]

