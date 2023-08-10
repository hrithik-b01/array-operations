
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

 
//Rest parameter
/**
 * This function generates an Array of 100 elements from 0 - 100
 * The user will be asked to enter a number that will be compared with the sum of sequence of array elements
 * User will also have an option on selecting number of sequence of array elements whose sum will be compared with the number
 * Only two options are available, 2 and 3
 */
const arrayComp=()=>
{
    let array=[];
    for(let i=0;i<100;i++)
    {
        array[i]=i;
    }
    let num = prompt("Enter a number to check:");
    let checknum=prompt("Enter the number of sequence you want to compare 2 or 3");
    if(checknum!=3&&checknum!=2)
    {
        alert("Invalid Input!!! number should be 2 or 3");
    }
    let flag=0;
    for(let i=0;i<array.length;i++)
    {
        if(checknum==2)
        {
            if(array[i]+array[i+1]==num)
            {
                console.log(`Match found - [${i}]: ${array[i]} and [${i+1}]: ${array[i+1]}`);
                flag=1;
            }
        }
        else{
            if(array[i]+array[i+1]+array[i+2]==num)
            {
                console.log(`Match found - [${i}]: ${array[i]}, [${i+1}]: ${array[i+1]} and [${i+2}]: ${array[i+2]}`);
                flag=1;
            }
        }
    }
    if(flag==0)
    {
        console.log("Not found!!!");
    }
}
arrayComp();


