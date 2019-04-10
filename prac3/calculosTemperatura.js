//-------------------------------------------------------------------
//-----------------------------CALCULOS TEMPERATURA------------------

var texto;
var fs = require( "fs" );
var json;

//LEEMOS EL FICHERO Y METEMOS LOS DATOS EN UN JSON
function leerFichero(fichero, callback){
  fs.readFile( fichero, "utf8", function( err, contenido ) {
    if( err ) {
      console.log( "hubo un problema al leer de hola.txt" );
      return;
    }
   callback(contenido);
  })
}

leerFichero("datos.txt", function(res){
  texto = res;
  json = JSON.parse(texto);
  console.log(texto);
  console.log(json);
  var laTempMax = tempMax(json);
  console.log(laTempMax);
  var laTempMed = tempMedia(json);
  console.log(laTempMed);
  var laTempMin = tempMin(json);
  console.log(laTempMin);
})



//CALCULAMOS LA TEMP MAXIMA
function tempMax(elJson){

//creamos un objeto donde guardaremos la medida
  var max = {
    temp : elJson.misMedidas[0].laTemp,
    hora : elJson.misMedidas[0].hora
  }

  for(let i = 0; i < elJson.misMedidas.length; i++){

    if(elJson.misMedidas[i].laTemp > max.temp){
      max.temp = elJson.misMedidas[i].laTemp;
      max.hora = elJson.misMedidas[i].hora;
    }

  }

  return max;


}

//CALCULAMOS LA TEMPERATURA MINIMA
function tempMedia(elJson){

  var res = 0;
  for(let i = 0; i < elJson.misMedidas.length; i++){

    res += elJson.misMedidas[i].laTemp;

  }

  return res/elJson.misMedidas.length;

}

//CALCULAMOS LA TEMPERATURA MINIMA
function tempMin(elJson){

//creamos un objeto en el que guardaremos la medida
  var min = {
    temp : elJson.misMedidas[0].laTemp,
    hora : elJson.misMedidas[0].hora
  }
  
  for(let i = 0; i < elJson.misMedidas.length; i++){

    if(elJson.misMedidas[i].laTemp < min.temp){
      min.temp = elJson.misMedidas[i].laTemp;
      min.hora = elJson.misMedidas[i].hora;
    }

  }

  return min;


}
