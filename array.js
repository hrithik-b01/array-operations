/**
 * This function takes an array sorts it using descending sort returns the first element which is the largest element in the Array
 * @param {*} arr 
 * @returns the largest number
 */
function array_largest(arr){
    var temp=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[i]>arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp
            }
        }
    }
    console.log(arr);
    let largest=arr[0];
    return largest;
}

var large=array_largest([1,11,2,13,12,14])
console.log(`The largest number is ${large}`)