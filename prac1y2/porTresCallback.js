
function porTres( n, callback ){

  var res = n * 3;
  callback(res);

}

//main()
porTres( 8, function(resultado){
  if ( resultado != 24 ) {
    console.log("No funciona correctamente");
    console.log("El resultado es: " + resultado);
  } else{
    console.log("Funciona correctamente");
    console.log("El resultado es: " + resultado);
  }
} );
