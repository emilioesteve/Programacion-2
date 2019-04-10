function filtrar( lista, condicion ){

  var lista2 = [];

  for( let i = 0; i < lista.length; i++ ){

    if(condicion(lista[i])){
      lista2.push(lista[i]);
    }

  }

  return lista2;

}
