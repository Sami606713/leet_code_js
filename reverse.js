let text="i am samiullah and i am a good boy and i make a movie recomendor engine"
/*
1-Make a empty list
2-Itrat on given string 
3-append the each char in list.
4-Reversr the string 
5-join with empty string
 */
let arr=[]
for (let i = 0; i < text.length; i++) {
    // console.log(text[i]); 
    let temp=text[i]
    arr.push(temp)
}
arr=arr.reverse()
console.log(arr.join(''));