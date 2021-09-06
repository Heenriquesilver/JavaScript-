function text(e){
   if(e.keyCode == 13 ){ //tecla enter == 13
       var texto = document.querySelector('#campo').value;
       console.log(e)
   }if(e.keyCode == 13 && texto === 'heenriquesilver'){
       alert('Acesso liberado')
   }else if(e.keyCode == 13 && texto != 'heenriquesilver'){
       alert('Login incorreto!')
   }
}

