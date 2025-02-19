let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumerosecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posisbles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumerosecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        } 
    }
      
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(numeroDeUsuario === numeroSecreto);

    if(numeroSecreto  === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero, en ${intentos} ${intentos ==1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del mumero secreto');
    asignarTextoElemento('p',`Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumerosecreto();
    console.log(numeroSecreto);
    intentos = 1 ;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value=' ';
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();  
    document.querySelector('#reiniciar') .setAttribute('disabled','true');
}

condicionesIniciales();
