let text='12425'
for (let i = 0; i < text.length; i++) {
   try {
    let nbr=parseInt(text[i])
    console.log(nbr);
   } catch (error) {
    console.log('not only nbr');
   }
}