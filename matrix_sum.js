// find the sum of all the element in the matrix
let arr=[[1,2,4],
        [5,3,6],
        [6,5,90]]
let sum=0
let row=arr.length
let col=arr[0].length
for (let i = 0; i < row; i++) {

   for (let j = 0; j < col; j++) {
        sum+=arr[i][j]
   }
}
console.log(sum);