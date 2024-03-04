let email='Sami606713@gmial.clom'

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(emailPattern.test(email)){
    console.log('valid email');
}else{
    console.log('not a valid emial');
}