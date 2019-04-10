
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function medirTemperatura() {

  var temperatura = {
    laTemp : getRandomArbitrary(15, 20.01),
    hora : 8000
  }

  return temperatura;

} // ()

// ––––––––––––––––––––––––––––-
// cuantas:N -> tomarMediciones() -> Lista<JSON{hora:N, temperatura:R}>
//
// Toma la cantidad de mediciones indicadas llamando
// cada segundo a medirTemperatura()
// ––––––––––––––––––––––––––––-
function tomarMediciones( cuantas, mediciones, callback ) {
  if( cuantas == 0 ) {
    callback( mediciones )
    return
  }
  mediciones.push( medirTemperatura() )
  setTimeout( function() {
    tomarMediciones( cuantas-1, mediciones, callback )
  } , 1000 )
} // ()
// –––––––––––––––––––––––––
// main()
// –––––––––––––––––––––––––
var medidas = [];

var fs = require( "fs" )
tomarMediciones(7, medidas, function(res){
  console.log(res);
  var otroJson = {
    misMedidas : []
  }
  otroJson.misMedidas.push(res);
  var texto = JSON.stringify(otroJson);
fs.writeFile( "datos.txt", texto, function( err ) {
  if( err ) {
    console.log( "hubo un problema al escribir en hola.txt" ) ;
  }
})
});

//
// completar: llamar a tomarMediciones() para que nos devuelva
// 7 medidas de temperatura y guardar lo que nos devuelve
// en el ficheor "datos.txt" (habiendo convertido los datos
// a JSON previamente)
//
