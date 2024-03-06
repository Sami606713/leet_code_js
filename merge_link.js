class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
// Linklist class
class Linklist{
    constructor(){
        this.head=null 
        this.total_node=0
    }
}

let list1 = [1,2,4]
let list2 = [1,3,4]
function merge(list1,list2) {
if(list1==null){
    return list2
}
if(list2==null){
    return list1
}
let dummy=new Linklist()
let curr=dummy
while ((list1.next!=null) && (list2.next!==null) ) {
    if(list1.value<list2.value){
        curr.next=list1
        list1=list1.next
    }else{
        curr.next=list2
        list2=list2.next
    }
    curr=curr.next
}
if(list1!=null){
    curr.next=list1
}else{
    curr.next=list2
}
}

// console.log(merge(list1,list2))