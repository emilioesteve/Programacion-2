function esPar(n){
  if( n % 2 == 0 ){
    return true;
  }{
    return false;
  }
}

function muestraCinco( n, funcion ){

  var cont = -1;
  var i = 0;
  var tiempo = 0;
  for(var i; i< n; i++){

    if( funcion(n) == true ){

      setTimeout ( function () {
         console.log(n);
         cont++;
         n += i;
       }, tiempo ) ;
       tiempo = tiempo + 1000;
    }

    if(cont == 5){
      break;
    }
  }

}

muestraCinco( 4, esPar );
