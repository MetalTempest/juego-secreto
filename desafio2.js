function holaMundo(){
    console.log('Hola Mundo');
}
holaMundo();

function holaNombre(nombre){
    console.log(`Hola ${nombre}`);
}
holaNombre("Tomas");

function dobleN(numero){
    return numero*2;
}
let resultadoDoble = dobleN(4);
console.log(resultadoDoble);

function promedioX(n1,n2,n3){
    return (n1 + n2 + n3)/3;
}
let resultadoPromedio = promedioX(1,2,3);
console.log(resultadoPromedio);


function mayor(n1,n2){
    return n1 > n2 ? n1 : n2;
}
let numeroMayor = mayor(5,6);
console.log(numeroMayor);

function cuadrado(n1){
    return n1*n1;
}
let resultadoCuadrado = cuadrado(5);
console.log(resultadoCuadrado);