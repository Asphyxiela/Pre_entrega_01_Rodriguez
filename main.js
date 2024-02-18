function tomarAgua(agua) {
    if(agua > 10) {
        console.log("Tomé suficiente agua hoy día :)")
    } else {
        console.log("Me deshidrataré si no consigo tomar suficente agua :(")
    }
}

tomarAgua(11);

function comer() {
    for (let i = 1; i <= 3; i++) {
        console.log(i)
    }
}

comer(3)

function promedioNotas() {
    let materia = prompt("¿De qué materia deseas saber tu nota?")
    let cantidadAlumnos = Number(prompt("¿Cuantos alumnos deseas revisar?"))

    for (let i = 0; i < cantidadAlumnos; i++) {
        let nombre = prompt("Ingrese el nombre del alumno " + (i + 1) + ":")
        let cantidadNotas = Number(prompt("Cuantas notas deseas ingresar para " + nombre + "?"))
        let suma = 0

    for (let i = 0; i < cantidadNotas; i++) {
        let nota = Number(prompt("Ingrese la nota del alumno " + (i + 1) + ":"))
        suma += nota
    }

    let promedio = suma / cantidadNotas

    if (promedio >= 10) {
        alert("El promedio de las notas de " + nombre + " en " + materia + " es " + promedio + ". Felicidades, ha aprobado.")
    } else {
        alert("El promedio de las notas de " + nombre + " en " + materia + " es " + promedio + ". Lo siento, no ha aprobado.")
    }
  } 
}

promedioNotas()