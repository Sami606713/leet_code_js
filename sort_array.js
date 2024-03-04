let arr=[1,3,5,2,1,5,1,45]
/*
0-use bubble sort
1-use two loop first start with 0 and 2 start with 1
2-compare 1 with all other element
3-if less then first nbr swap them with current nbr 
*/
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i]>arr[j]){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr);