var pila = {

  elementos : ["coche", "movil", "moto", "cascos"],
  apilar : function(elemento){
    pila.elementos.push(elemento)
  },
  desapilar : function(elemento){
    for(let i = 0; i < pila.elementos.length; i++){
      if(elemento == pila.elementos[i]){
        pila.elementos.splice(i,1);
      }
    }
  },
  cima : function(){
    return pila.elementos[this.elementos.length - 1];
  }

}

pila.apilar("Hola");
if(pila.elementos[4] == pila.cima()){
  console.log(pila.cima());
  console.log("Funciona correctamente");
} else{
  console.log(pila.elementos[4]);
  console.log("No funciona correctamente");
}
