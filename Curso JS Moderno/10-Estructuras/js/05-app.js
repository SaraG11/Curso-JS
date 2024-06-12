// switch case

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    default:
        console.log('Aun no has seleccionado un método de pago');
        break;
}

function pagar(){
    console.log('pagando...');
}