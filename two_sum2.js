let arr=[1,2,3,4,5]
let target=9
// var twoSum = function(nums, target) {
//     num_dic={}
//     for(let i=0;i<nums.length;i++){
//         let complement=target-nums[i]
//         if(complement in num_dic){
//             return [num_dic[complement]+1,i+1]
//         }
//         num_dic[nums[i]]=i
//     }
// };

// console.log(twoSum(arr,target));

let dic={}
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    let complement=target-arr[i]
    console.log(complement);
    if(dic[complement]){
        console.log([dic[complement]+1,i+1]);
    }else{
        dic[arr[i]]=i
    }    
}