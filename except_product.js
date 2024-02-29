let arra=[1,2,3,4]
// console.log(arra.reduce((acc, current) => acc * current, 1));
let arr2=[]
for (let i = 0; i < arra.length; i++) {
    let temp=arra.slice()
    // console.log("i:",i);
    // console.log("before:",temp);
    temp.splice(i,1)
    let prod=temp.reduce((x, y) => x* y, 1)
    // console.log("after",prod);
    arr2.push(prod)
    
}
console.log(arr2);
