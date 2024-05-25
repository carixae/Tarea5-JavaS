
//--------------------------------Ejercicio 1  Array -----------------------//

let arreglo= new Array (1,2,3,4,5,6,7,8,9,10);
console.log(arreglo[2]);
arreglo.push(11);
console.log(arreglo);
arreglo.shift([0]);
console.log(arreglo);
for (let i = 0; i < 10; i++) {
    console.log(arreglo[i]);
  }
  
//--------------------------------Ejercicio 2 Objetos y Literales-----------------------//

  var persona = {
    nombre: "Carolina",
    edad: "39",
    ciudad: "Cartago",
  };
  console.log(persona.nombre);

  persona.ciudad="San José"
  console.log(persona);

  persona.ocupacion= "estudiante";

  console.log(persona);

  //--------------------------------Ejercicio 3 Funsiones -----------------------//
 
alert ("Bienvenido");
let nombre =prompt ("Digite un nombre:");
const num1= 5;
const num2= 7;

function saludar(nombre){
    saludo = "Hola "+ nombre
    return saludo
}

function sumar (num1, num2){
    sumatoria = num1 + num2; 
return sumatoria;
  }

saludar(nombre);
console.log(saludo);
sumar(num1, num2);
console.log("La suma de sus números es:"+ sumatoria)


  //--------------------------------Ejercicio 4 Obejtos de Fecha -----------------------//

 let hoy = new(Date)
   anio=hoy.getFullYear();
   mes=hoy.getMonth()+1;
  console.log(anio);
  console.log(mes);

  let proxfecha = new Date ( "1/1/2025");
  console.log (proxfecha);


  //--------------------------------Ejercicio 5 Estructuras de control de flujo -----------------------//

  nota= parseInt(prompt("Digite la nota del 1 al 10 para saber si aprobo o reprobo "))

  if (nota>=5) {
    console.log("Aprobado")}
else{
    console.log("Reprobado")
  }


  //--------------------------------Ejercicio 6  Blues sobre arrays-----------------------//
  
  let frutas= new Array ("banano", "fresa", "piña", "sandia", "melón");
  console.log(frutas);

   for (let i = 0; i < 5; i++) {
    console.log(frutas[i]);
  }

  for (let i = 0; i < 5; i++) {
    console.log(i + " "+frutas[i]);
  }
 
 