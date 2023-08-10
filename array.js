/**
 * This function checks if an array is a factor chain or not
 * Example of factor array - [2,4,8,16]
 * Example of not a factor array - [2,4,8,28]
 * This function loops through the array, checks if the next element is the factor of
 * current number.
 * @param {array} arr 
 * @returns the result- True or false.
 */

function factrChain(arr){
     
    const array = arr;
    let flag = true;

    for(let i=0;i < array.length -1;i++){

        if(! (array[i+1] % array[i] === 0)){
            flag = false;

        }
    }
    return flag;
}