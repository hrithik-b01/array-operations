function array_largest(arr){
    arr.sort();
    let largest=arr[arr.length-1];
    return largest;
}

var large=array_largest([20,70,60,30,50,80])
console.log(`The largest number is ${large}`)