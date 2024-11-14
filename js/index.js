/* 3. PROFESORES-A
|* En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
|* 3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
|* sexo (F - M).
|* Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
|* estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
|* retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
|* Función: profesoresCategoria.
|* Parámetros: profesores (array de objetos profesor), categoria (un número).
|* Retorno: array de objetos profesor que pertenecen a la categoría indicada. 
*/
let profesoresCategoria = (profesores, categoria) => {
    let resultado = [];
    for ( let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoria === categoria) {
            resultado.push(profesores[i]);
        }
    }
    return resultado;
};

let profesores = [
    {categoria: 1, cedula: 555, nombre: "José", sexo: "M"},
    {categoria: 2, cedula: 111, nombre: "Alvarado", sexo: "M"},
    {categoria: 3, cedula: 222, nombre: "Daicy", sexo: "F"},
    {categoria: 2, cedula: 333, nombre: "Marta", sexo: "F"},
    {categoria: 4, cedula: 444, nombre: "Emilio", sexo: "M"},
    {categoria: 5, cedula: 777, nombre: "Olga", sexo: "F"},
    {categoria: 5, cedula: 888, nombre: "William", sexo: "M"},
];

let salida = document.getElementById("salida");
let profCat1 = profesoresCategoria(profesores, 1);
let profCat5 = profesoresCategoria(profesores, 5);

salida.innerHTML += `<br>Profesores de categoría 1 (Instructor): `
profCat1.forEach((prof1) => {
    salida.innerHTML += `<br>Cedula: ${prof1.cedula} - Nombre: ${prof1.nombre} - Sexo: ${prof1.sexo}`;
});
salida.innerHTML += `<br><br>Profesores de categoría 5 (Titular): `
profCat5.forEach((prof5) => {
    salida.innerHTML += `<br>Cedula: ${prof5.cedula} - Nombre: ${prof5.nombre} - Sexo: ${prof5.sexo}`;
});
