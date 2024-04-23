//Creacion de objetos

let obj = {}; //definir objetos
let obj2 = new Object(); // es lo mismo 

/**
 * tipo de constructores
 * new Array(); []
 * new String(); "" '' ´´
 * new Number(): 12
 * new Boolean(); true false 
 */

function Usuario(){
    this.name = "Sara";
}

let user = new Usuario();
console.log(user.constructor);

const s1= "1 + 1";
const s2 = new String("1+1");
console.log(s1, s2);