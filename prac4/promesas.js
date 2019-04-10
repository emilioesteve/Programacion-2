var fss = require( "fs" );
var fs = require( "fs" );


function leerFichero( nFichero ) {

  var prom = new Promise( function( resolver, rechazar ) {
    setTimeout( function () {
      //leemos el fichero;
      fss.readFile( nFichero, "utf8", function( err, contenido ) {
      if( err ) {
        rechazar(nFichero);
        return
      }
      resolver(contenido);
      })
    }, 300 )
  })

  return prom
} // ()


function escribirFichero( nFichero, texto ){

  var prom = new Promise( function( resolver, rechazar ) {
    setTimeout( function () {
      //creamos el fichero
      fs.writeFile( nFichero, texto, function( err ) {
      if( err ) {
        rechazar(nFichero);
      }
      resolver();
      });
    }, 300 )
  });

  return prom

}

async function concatenarFicheros( nFichero1, nFichero2 ){

  var texto1 = await leerFichero( nFichero1 ); //leo el fichero1
  var texto2 = await leerFichero( nFichero2 ); //leo el fichero2

  escribirFichero( "ficheroConcatenado.txt", texto1 + texto2 );

}

concatenarFicheros( "fichero1.txt", "fichero2.txt" ).then( function(res){

})
