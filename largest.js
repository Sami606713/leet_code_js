let arr=[1,2,4,-3,-2]
/*
1-declear a variable with first element if the given array
2-itrate a list
3-chekc if current elment is grater then the delear var resigin the var with curr var.
4-At the end print the declear variable
*/
let max=arr[0]
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]); 
    if (arr[i]>max) {
        max=arr[i]
    }
}
console.log(max);