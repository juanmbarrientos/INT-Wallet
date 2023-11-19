let saldo = 0;
let movimientos = [];
let interes = 0;
let saldoDOM = document.getElementById("saldo")

function ingreso(valor_ingreso) {
  saldo = saldo + valor_ingreso;
  console.log("Su saldo actual es de $" + saldo.toFixed(2));
  movimientos.push("Ingresó $" + valor_ingreso);
  saldoDOM.innerHTML = saldo.toFixed(2);
}

function egreso(valor_egreso){
  switch (true){ // Valida con true las expresiones de los cases
    case (saldo <= 0):
      console.log("No tienes dinero para retirar");
      break;
    
    case (saldo - valor_egreso <= 0):
          console.log("No puedes retirar dinero y dejar menos de $0");
          console.log("Puedes retirar hasta $" + saldo.toFixed(2));
          break;

    default:
      saldo = saldo - valor_egreso;
      console.log("Tu saldo actual es de $" + saldo.toFixed(2));
      movimientos.push("Retiró $" + valor_egreso.toFixed(2));
      saldoDOM.innerHTML = saldo.toFixed(2);
      break
  }
}

// function egreso(valor_egreso) {
//   if (saldo == 0) {
//     console.log("No tienes dinero para retirar");
//   } else if (saldo - valor_egreso <= 0) {
//     console.log("No puedes retirar dinero y dejar menos de $0");
//     console.log("Puedes retirar hasta $" + saldo.toFixed(2));
//   } else {
//     saldo = saldo - valor_egreso;
//     console.log("Tu saldo actual es de $" + saldo.toFixed(2));
//     movimientos.push("Retiró $" + valor_egreso.toFixed(2));
//   }
// }

setInterval(() => {
  intereses();
  console.log("Se generaron intereses luego de 1 minuto");
}, 60000);
// Intereses por cada minuto

function intereses() {
  interes = (saldo * 2) / 100;
  // 2% de interes por cada minuto (setInterval)
  saldo = saldo + interes;
  console.log("El interes es de $" + interes.toFixed(2));
  console.log("Su saldo actual es de $" + saldo.toFixed(2));
  movimientos.push("Intereses $" + interes.toFixed(2));
  saldoDOM.innerHTML = saldo.toFixed(2);
}

function verMovimientos() {
  console.table(movimientos);
  console.log("Tu saldo es de $" + saldo.toFixed(2));
}
