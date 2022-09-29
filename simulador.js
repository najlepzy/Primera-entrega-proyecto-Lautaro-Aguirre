function calculo(monto, cuotas) {
    let intereses;
    if (cuotas == 3) {
        intereses = monto * 0.15;
        return intereses
    }
    else if (cuotas == 6) {
        intereses = monto * 0.30;
        return intereses
    }
    else if (cuotas == 12) {
        intereses = monto * 0.60;
        return intereses
    }
    else {
        console.log("Cuotas incorrectas");
    }
}
console.log("Bienvenido/a al simulador de prestamos online");

let monto = parseInt(prompt("Ingrese el monto que quiere solicitar"));
let cuotas = parseInt(prompt("Seleccione la cantidad de cuotas 3-6-12"));
console.log("Solicitaste:", monto, "$");
console.log("En:", cuotas, "cuotas");
console.log("El total del prestamo es de:", calculo(monto, cuotas));

