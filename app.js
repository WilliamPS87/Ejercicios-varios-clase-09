
const contar = () => {
    var cantidad = parseInt(document.getElementById("cantidad1").value);
    var resultado1 = "";
        for (let i = cantidad; i <= 50; i = i + 5) {
        //console.log(i);
        resultado1 = resultado1 + i;
    }
    document.getElementById("contar5").value = resultado1;
}
/*----*/
const Concatenar = () => {
    var nombreIngresado = document.getElementById("nombre").value;
    var apellidoIngresado = document.getElementById("apellido").value;
    var edadIngresado = document.getElementById("edad").value;
    var nacionalidadIngresado = document.getElementById("nacionalidad").value;
    
    var persona = {
        nombre: nombreIngresado,
        apellido: apellidoIngresado,
        edad: edadIngresado,
        nacionalidad: nacionalidadIngresado,
        }
    console.log(persona);
    
    var div = document.getElementById("concatenar");
    concatenar.append(`nombre: ${persona.nombre} apellido:${persona.apellido} edad:${persona.edad} nacionalidad:${persona.nacionalidad}`)
    document.getElementById("concatenar").value = persona;
}
