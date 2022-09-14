//EXPRESION DE CLASE
// const Rectangulo =  class R {

// }

//DECLARANDO CLASE
// console.log(Rectangulo)
// clases declaradas con class no tienen hoisting
class Rectangulo {

}

// Hoistin 
// y esto es cuando tomamos variables definidas con var 
// y las funciones definidas con function 
// y las lleva al comienzo del archivo

// console.log(Cuadrado);

function Cuadrado() {}
// console.log(Cuadrado, Rectangulo);

const r = new Rectangulo()

class Chancho {
    propiedad = 'mi propiedad'
    #hablar //= false
    static statatico = 42
    constructor(estado = 'Feliz', hambre = false){
    this.estado = estado
    this.#hablar = hambre
    }
    hablar(){
        console.log( `soy un chancho ${this.estado} ${this.#hablar ? 'con mucha hambre!' : 'satisfecho!' }` );

    }
    static comer (){
        console.log(this.statatico, 'Estoy comiendo!')
    }
}

Chancho.comer()
const feliz = new Chancho('feliz')
// console.log(feliz.__proto__.hablar)
// feliz.hablar()
// console.log(feliz)
const triste = new Chancho('triste')
// triste.hablar()
const nose = new Chancho()
// nose.hablar()