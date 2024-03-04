/*
1-declear thr empty dic
2-check if nbr in dic return dic
3-else add the calculated nbr in dic after adding saminau return the nbr that in dic
*/
function fabonacii(nbr) {

    let dic={0:1,1:1}
    if(nbr in dic){
        return dic[nbr]
    }else{
        dic[nbr]=fabonacii(nbr-1)+fabonacii(nbr-2)
        return dic[nbr]
    }
}

console.log(fabonacii(40));