let nbr=[9,9,91,2,4,5,4,5,6,6,6,6,6,5]
let arr=[]
for (let i = 0; i < nbr.length; i++) {
    if(!arr.includes(nbr[i])){
        arr.push(nbr[i])
    }
}
console.log(arr);