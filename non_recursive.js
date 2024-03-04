let nbr=[2,3,4,21,3,2,1]
/*
1-make a empty set
2-itrate the array
3-chekc if value in set we create delete them else add them 
4-At the end print the value 
*/
let data=new Set()
for (let i = 0; i < nbr.length; i++) {
    let value=nbr[i]
    if (data.has(value)) {    
       data.delete(value)
    } 
    else {
        data.add(value)
    }
}
console.log(data);