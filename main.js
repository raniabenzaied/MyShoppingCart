let btndelete =document.querySelectorAll(`.btn-delete`);
for (let i=0; i<btndelete.length; i++){
    btndelete[i].addEventListener(`click`,function(){
        btndelete[i].parentElement.parentElement.remove()
    })

}

let bouttonplus =document.getElementsByClassName(`btn-plus`);
for(let i=0; i<bouttonplus.length; i++){
    bouttonplus[i].addEventListener('click',function(){
        bouttonplus[i].previousElementSibling.innerText ++;
    });
}
let bouttonmoins =document.getElementsByClassName('btn-moins');
for(let i=0 ; i<bouttonmoins.length; i++){
    bouttonmoins[i].addEventListener('click',function(){
        if( bouttonmoins[i].nextElementSibling.innerText > 0)
            bouttonmoins[i].nextElementSibling.innerText -- ;
        
    })
    }

    let heart =document.getElementsByClassName('fas fa-heart');
    for(let i=0 ;i<heart.length; i++){
        heart[i].addEventListener('click',function(){
            if(heart[i].style.color=== 'grey'){
            heart[i].style.color='red'}
            else{heart[i].style.color='grey'}
        });
    
    }


    let subtotal = 0;

    const calculateTax = subtotal => {
      const tax = subtotal * 0.13;
      const formattedTax = tax.toFixed(2);
      return formattedTax;
    };
    
    const calculateTotal = subtotal => {
      const tax = calculateTax(subtotal);
      const total = parseFloat(subtotal) + parseFloat(tax);
      const formattedTotal = total.toFixed(2);
      return formattedTotal;
    };
    
