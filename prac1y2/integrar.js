// funciones
function porDos(a){
  return a * 2;
}

// inicio:N fin:N f:function dx:R ==> integrar() ==> R

// lim = cuantos rectangulos hay
// f(i) = altura
//dx = base

function integrar( inicio, fin, f, dx, callback ){

  var lim = (fin - inicio)/dx;
  var res = 0;
  for( let i = 0; i < lim; i++ ){
    res += f(i) * dx;
  }

  callback(res);

}

function integrar2( inicio, fin, f, dx ){

  var lim = (fin - inicio)/dx;
  var res = 0;
  for( let i = 0; i < lim; i++ ){
    res += f(i) * dx;
  }

  return res;

}

//main()
integrar( 0, 6, porDos, 2, function(res){
  if( res == 12 ){
    console.log("Funciona correctamente");
    console.log(res);
  } else{
    console.log("No funciona correctamente");
    console.log(res);
  }
});

var sol = integrar( 0, 6, porDos, 2 );
if( sol != 12 ){
  console.log("funciona correctamente");
} else{
  console.log("No funciona correctamente");
}
