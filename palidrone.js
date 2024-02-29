// Method 1
let s = "1A______ man, a plan, a canal: Panama1"
s =s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

console.log(s);
s.ree
function palidrone(s) {
    if(s.length<=1){
        return true
    }else{
        if(s[0]!=s[s.length-1]){
            return false
        }else{
            return palidrone(s.slice(1,-1))
        }
    }
}


// Method 2
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    s=s.toLowerCase();
    let checker="abcdefghijklmnopqrstuvwxyz"
    let dig='0123456789'
    let final=""
    for(let i=0;i<s.length;i++){
        if(checker.includes(s[i]) || dig.includes(s[i])){
            final+=s[i]
        }
    }

    if(final.length<=1){
        return true
    }else{
        if(final[0]!=final[final.length-1]){
            return  false
        }else{
            return isPalindrome(final.slice(1,-1))

        }
    }

};



