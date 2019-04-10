// ultima parte de la practica

function invertirPal(palabra) {
  return palabra.split("").reverse().join("");
}


var a = invertirPal("Hola")
console.log(a);

var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];

function allToguether(lista, callback, callback2, callback3, callback4){

  var letras = 0;
  var masDe5 = 0;
  var nFrase = "";
  var lRes = [];

  for( let i = 0; i < lista.length; i++ ){

    lRes.push(invertirPal(lista[i]));
    letras += lista[i].length;

    if ( lista[i].length >= 5 ){
      masDe5++;
    }

    if ( lista[i].length <= 3 ){
      nFrase += lista[i];
    }

  }

  callback(lRes);
  callback2(letras);
  callback3(masDe5);
  callback4(nFrase);

}

allToguether(palabras, function(res){
  for(let i = 0; i < palabras.length; i++){
    console.log(palabras[i]);
  }
}, function(res2){
  console.log("Hay " + res2 + " letras en total");
}, function(res3){
  console.log("Hay " + res3 + " palabras con mas de 5 letras");
}, function(res4){
  console.log("La nueva frase es: " + res4);
})

function filtrar( lista, condicion ){

  var lista2 = [];
  for( let i = 0; i < lista.length; i++ ){
    if(condicion(lista[i])){
      lista2.push(lista[i]);
    }
  }

  return lista2;
}

function mapear(lista, funcion){

  var lista2 = [];
  for( let i = 0; i < lista.length; i++ ){
    lista2.push(funcion(lista[i]));
  }

  return lista2;

}+

function reducir(llista, t, funcionF ){

  for( let i = 0; i < llista.length; i++ ){

    t = funcionF(llista[i], t);

  }
  return t;

}

function trozo1(){

  var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];
  var invertidas = mapear(palabras, function(res){
     return invertirPal(res);
  });

  for( let i = 0; i < invertidas.length; i++ ){
    console.log(invertidas[i]);
  }

}

function trozo2(){

  var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];
  var sol = reducir(palabras, 0, function(pal, t){
    t += pal.length;
    return t;
  })

  console.log("Hay" + sol + " letras");

}

function trozo3(){

  var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];
  var otras = filtrar(palabras, function(res){
    if(res.length >= 5){
      return true;
    }else{
      return false;
    }
  });

  console.log(otras.length);

}

function trozo4(){

  var palabras = ["Es", "ahora", "tu", "oportunidad", "para", "aprovechar", "este", "día"];
  var otras = filtrar(palabras, function(res){
    if(res.length <= 3){
      return true;
    } else{
      return false;
    }
  })

  var nFrase = "";
  for( let i = 0; i < otras.length; i++ ){
    nFrase += otras[i];
  }

  console.log(nFrase);

}

trozo1();
trozo2();
trozo3();
trozo4();
