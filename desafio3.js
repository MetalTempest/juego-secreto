function indiceMasaCorporal(altura,peso){
    var imc = peso / (altura * altura);
    return imc;
}

function numeroFactorial(numero){
    if (numero === 0 || numero === 1){
        return 1;
    } else {
        return numero * numeroFactorial(numero - 1);
    }
}
let numero = 5;
let resultadoFactorial = numeroFactorial(numero);
console.log(`El factorial de ${numero} es ${resultadoFactorial}`);

function dolarReal(dolares){
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
}
let dolares = 50;
let valorEnReales = dolarReal(dolares);
console.log(`${dolares} dolares es R$ ${valorEnReales}`);

function areaRectangular(alto,ancho){
    var area = (alto * ancho);
    var perimetro = 2(alto + ancho);
    console.log("Area :" + area);
    console.log("Perimetro :" + perimetro);
}
let altura = 10;
let ancho = 25;
areaRectangular(alto,ancho);

function areaCircular(radio){
    var pi = 3.14
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Area :" + area);
    console.log("Perimetro :" + perimetro);
}
let radio = 4; //en metros
let resultadoCircular = areaCircular(radio);