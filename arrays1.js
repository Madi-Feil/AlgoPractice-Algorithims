//Push Front
//Given an array and an additional value, insert this value at the beginning of the array. You may use .push()
//Will use examples: [5,7,2,3], 8 and [99],7

function pushFront(arr, val) {
    for(let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }
    arr[0] = val
    return arr
}
//console.log(pushFront([5,7,2,3], 8)) logs => [8,5,7,2,3]
//console.log(pushFront([99], 7)) logs => [7,99]

//Pop Front
//Given an array, remove and return the value at the beginning of the array.
//Prove that value is removed from the array by printing it. You may use .pop()
//will use examples: [5,10,15] => 0 returned, with printed [5,10,15,15] printed in the funciton. & [4,5,7,9] => 4 returned with [5, 7, 9]

function popFront(arr) {
    let firstValue = arr[0]
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return firstValue
}
//console.log(popFront([0,5,10,15])) logs => [5,10,15] on another line => 0
//console.log(popFront([4,5,7,9])) logs => [5,7,9] on another line => 4

//Insert At
//Given an array, index and additional value, insert the value into array at given index
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
//You may use .push()
//will use examples: insertAt([100,200,5],2,311) => [100,200,311,5] and insertAt([9,33,7],1,42) => [9,42,33,7]
function insertAt(arr, index, value) {
    for(let i = arr.length; i >= index; i--) {
        arr[i] = arr[i - 1]
    }
    arr[index] = value
    return arr
}
//console.log(insertAt([100,200,5],2,311)) logs => [100,200,311,5]
//console.log(insertAt([9,33,7],1,42)) logs => [9,42,33,7]

