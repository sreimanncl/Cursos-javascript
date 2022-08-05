console.log('p')
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

                                
let sexlectPokemonAn = document.getElementById("select-pokemon")
sexlectPokemonAn.addEventListener('click', selectPokemonAn)
let botonFuego = document.getElementById('fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonHoja = document.getElementById('hoja')
botonHoja.addEventListener('click', ataqueHoja)
let botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click', reiniciarJuego)
let sectionSeleccionarAtaque = document.getElementById('atack')
sectionSeleccionarAtaque.style.display = 'none'
let sectionReiniciar = document.getElementById('reiniciar')
sectionReiniciar.style.display = 'none'

function selectPokemonAn() {
    let sectionSeleccionarMascota = document.getElementById('select')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('atack')
    sectionSeleccionarAtaque.style.display = 'block'

        let charizar = document.getElementById('charizar')
        let blastoise = document.getElementById('blastoise')
        let vinasor = document.getElementById('vinasor')
        let chanasor = document.getElementById('chanasor')
        let blastzor = document.getElementById('blastzor')
        let charistoise = document.getElementById('charistoise')
        let miPke = document.getElementById('mio')

        if (charizar.checked){
            miPke.innerHTML = 'charizard'
        }
        else if (blastoise.checked){
            miPke.innerHTML = 'blastoise'
        }
        else if (vinasor.checked){
            miPke.innerHTML = 'vinasor'
        }
        else if (chanasor.checked){
            miPke.innerHTML = 'chanasor'
        }
        else if (blastzor.checked){
            miPke.innerHTML = 'blastzor'
        }
        else if (charistoise.checked){
            miPke.innerHTML = 'charistoise'
        }
        else {
            alert('elige uno')
        }

        seleccionarMascotaEnemigo()
    }
    
function seleccionarMascotaEnemigo() {
        let enAleatorio = aleatorio(1,6)
    let pokeRivall  = document.getElementById('rival')

    if  (enAleatorio == 1) {
        pokeRivall.innerHTML = 'Charizard'
    }

    else if (enAleatorio == 2){
        pokeRivall.innerHTML = 'blastoise'
    }
    else if (enAleatorio == 3){
        pokeRivall.innerHTML = 'vinasor'
    }
    else if (enAleatorio == 4){
        pokeRivall.innerHTML = 'chanasor'
    }
    else if (enAleatorio == 5){
        pokeRivall.innerHTML = 'blastzor'
    }
    else {
        pokeRivall.innerHTML = 'charistoise'

    }
    }

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
    }
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
    }
function ataqueHoja() {
    ataqueJugador = 'Hoja'
    ataqueAleatorioEnemigo()
    }
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)

    if  (ataqueAleatorio==1){ataqueEnemigo='FUEGO'}
    else if (
        ataqueAleatorio==2){ataqueEnemigo='AGUA'}
    else    {
        ataqueEnemigo='hoja'}

        combate()
    }
function combate(){
    let spanVidasJugador = document.getElementById('mivida')
    let spanVidasEnemigo = document.getElementById('vidarival')
    if (
        ataqueEnemigo==ataqueJugador){crearMensaje("EMPATE")    
    }

    else if  (
        ataqueJugador=='FUEGO'&&ataqueEnemigo=='HOJA'){crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    
    }
    else if (
        ataqueJugador=='AGUA'&&ataqueEnemigo=='FUEGO'){crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    
    }
    else if  (
        ataqueJugador=='HOJA'&&ataqueEnemigo=='AGUA')
        
        {
            crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }
    else    {crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
}
revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

function crearMensaje(resultado){
    let sectionMensajes=document.getElementById('msj')
    let parrafo=document.createElement('p')
    parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+', las mascota del enemigo atacó con '+ataqueEnemigo+'- '+resultado 
    sectionMensajes.appendChild(parrafo)
    sectionMensajes.appendChild(parrafo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('msj')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('hoja')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}
function reiniciarJuego() {
    location.reload()
}
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
