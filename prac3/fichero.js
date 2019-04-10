var fs = require( "fs" )
fs.writeFile( "nombre.txt", "Emilio Esteve Peiró", function( err ) {
if( err ) {
console.log( "hubo un problema al escribir en hola.txt" )
}
});

var fss = require( "fs" )
fss.readFile( "nombre.txt", "utf8", function( err, contenido ) {
if( err ) {
console.log( "hubo un problema al leer de hola.txt" )
return
}
console.log( contenido )
})
