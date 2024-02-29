// let paran='{([])}{}([{}])'
let paran ="()[]{}"
let stack=[]
// let remain=[]
// make the paranthesis pair
let dic={
        "{":"}","(":")","[":"]"
}


if(paran.length%2==0){
    for (let i = 0; i < paran.length; i++) {
        // const element = paran[i];
        if(paran[i] in dic){
            console.log(paran[i]);
        }
        
    }
}else{
    console.log('not');
}
// itrate loop and read string char by char
