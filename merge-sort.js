const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    } else {
        const half = Math.ceil(arr.length / 2);
        const leftHalf = arr.slice(0, half);
        const rightHalf = arr.slice(half);

        // Recursive calls 
        const sortedLeft = mergeSort(leftHalf);
        const sortedRight = mergeSort(rightHalf);

        return merge(sortedLeft, sortedRight);
    }
};

const merge = (left, right) => {
    let mergedArr = [];

    let indexLeft = 0;  //First half
    let indexRight = 0; //Second

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] <= right[indexRight]) {
            mergedArr.push(left[indexLeft]);
            indexLeft++;
        } else {
            mergedArr.push(right[indexRight]);
            indexRight++;
        }
    }

    while (indexLeft < left.length) {
        mergedArr.push(left[indexLeft]);
        indexLeft++;
    }

    while (indexRight < right.length) {
        mergedArr.push(right[indexRight]);
        indexRight++;
    }
    return mergedArr;
};


// const unsortedArray = [4, 1, 5, 82, 2, 1, 22];
// const unsortedArray = [4, 1, 7, 2, 88];
const unsortedArray = [4, 2, 23, 11, 33, 44, 55, 990, 11];
console.log('Unsorted Array: ', unsortedArray);
const sortedArray = mergeSort(unsortedArray);
console.log('Sorted Array: ', sortedArray);