let sen="i am samiullah and i am a good boy and i make a movie recomendor engine"
/*
1-Make a empty dic 
2-itrate on given string.
3-if current element in dic add +1
4-else add 1 in dic
*/
let dic={}
for (let i = 0; i < sen.length; i++) {
    let value=sen[i]
    if(value in dic){
        dic[value]+=1
    }else{
        dic[value]=1
    }
}
console.log(dic);