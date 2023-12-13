let estudiantes = [];

for (let i = 0; i < 2; i++) {
  let nombre = prompt("Ingrese el nombre del estudiante");
  
  let calificaciones = [];
  for (let j = 0; j < 3; j++) {
    let calificacion = prompt(`Ingrese la calificación para ${nombre}`);
    calificaciones.push(parseFloat(calificacion));
  }

  let estudiante = {
    nombre: nombre,
    calificaciones: calificaciones
  };

  estudiantes.push(estudiante);
}
console.log(estudiantes);


function calcularPromedio(calificaciones) {
    let suma = calificaciones.reduce((a, b) => a + b, 0);
    return suma / calificaciones.length;}

    console.log(calcularPromedio(estudiantes[0].calificaciones));
    console.log(calcularPromedio(estudiantes[1].calificaciones));



    