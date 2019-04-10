//examen1

function aleatorio(f){
  setTimeout(function(){
    f(Math.random())
  }, 100)
}

function relleneUna( lista, pos, callback ){
  aleatorio(function(res){
    lista[pos] = res
    callback();
  })
}

var lista = [];

relleneUna(lista, 4, function(){
  console.log(lista[4])
})

function rellenaLista( cuantas, callback ){

  var cont = 0;
  var lista = [];

  for( let i = 0; i < cuantas; i++ ){

    relleneUna(lista, i, function(){
      cont++;
    })

  }

}

rellenaLista(5, function(res){
  console.log(res);
})
