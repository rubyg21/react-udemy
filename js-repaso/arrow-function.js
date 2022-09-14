// Funciones que seDECLARAN con la palabra reserverada fuction

// function Fn(){
    // {this.prop = 'propiedad'}
    //
    // this.prop = 'propiedad'

// }

// Fn.prototype.lala = function FuncionDePrototipo() {}

// const r = new Fn()
// console.log(r__proto__);

// fat arrpw fuction


// console.log(this)

const fatFn =() =>{ //    NO TINEN CONTECTO DE THIS
    // return 'chanchito feliz'
    this.prop = 'lala'

}

const r1 = fatFn()
console.log(this)
// console.log(r1).;


const fnR = () => 2
console.log(fnR())