function even_odd(nbr) {
    if((nbr & 1)==0){
        return 'even'
    }else{
        return 'odd'
    }
}
console.log(even_odd(5+1));