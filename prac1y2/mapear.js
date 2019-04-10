function mapear(lista, funcion){

  lista2 = [];
  for( let i = 0; i < lista.length; i++ ){
    lista2.push(funcion(lista[i]));
  }

  return(lista2);

}

var lista = ["hola", "adeu"];
var lista2 = mapear(lista, function(res){
  if( res[0] == 4 && res[1] == 4 ){
    console.log("Funciona correctamente");
  }
})
