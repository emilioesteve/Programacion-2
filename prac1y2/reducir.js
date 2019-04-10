function reducir(llista, t, funcionF, callback){

  var res = funcionF(llista, t);
  callback(res);

}

function sumar(llista, t){
  var res = t;
  for( let i = 0; i < llista.length; i++ ){
    res += llista[i];
  }
  return res;
}

var lista = [ 1, 2, 3, 4, 5];

reducir(lista, 0, sumar, function(res){
  if( res == 15 ){
    console.log("Funciona correctamente");
    console.log(res);
  }
})
