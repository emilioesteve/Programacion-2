var horario = {
  lunes: ["física", "8:00", "matemáticas", "inglés"],
  martes: ["programación", "matemáticas"],
  miercoles: ["ingles", "física", "5:00"],
  jueves: ["física", "3:00", "matemáticas", "inglés"],
  viernes: ["programación", "matemáticas"],
}


function horarioAsignatura2(json, asignatura) {

  var array = [];

  for (let i = 0; i < json.lunes.length; i++) {

    if (json.lunes[i] == asignatura) {
      array.push("Lunes");
      //array.push(horario.lunes[i]);
      array.push(horario.lunes[i + 1]);
    }


  }

  for (let i = 0; i < json.martes.length; i++) {

    if (json.martes[i] == asignatura) {
      array.push("Martes");
      //array.push(horario.martes[i]);
      array.push(horario.martes[i + 1]);
    }

  }

  for (let i = 0; i < json.miercoles.length; i++) {

    if (json.miercoles[i] == asignatura) {
      array.push("Miercoles");
      //array.push(horario.miercoles[i]);
      array.push(horario.miercoles[i + 1]);
    }

  }
  for (let i = 0; i < json.jueves.length; i++) {

    if (json.jueves[i] == asignatura) {
      array.push("Jueves");
      array.push(horario.jueves[i]);
      array.push(horario.jueves[i + 1]);
    }

  }

  for (let i = 0; i < json.viernes.length; i++) {

    if (json.viernes[i] == asignatura) {
      array.push("Viernes");
      array.push(horario.viernes[i]);
      array.push(horario.viernes[i + 1]);
    }

  }

  return array;

}

console.log(horarioAsignatura2(horario, "física"));
