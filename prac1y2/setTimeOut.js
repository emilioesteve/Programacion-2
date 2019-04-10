//
setTimeout ( function () {
  console.log (" hola 1 ");
 }, 2000 );


setTimeout ( function () {
   console.log (" hola 2 ");
 }, 4000 ) ;

 function porTres( n, callback ){

   setTimeout ( function () {
     var res = n * 3;
     callback(res);
   }, 3000 ) ;

 }

 porTres( 8, function(resultado){
   if ( resultado != 24 ) {
     console.log(" No funciona correctamente");
     console.log(" El resultado es: " + resultado);
   } else{
     console.log(" Funciona correctamente");
     console.log(" El resultado es: " + resultado);
   }
 } );
