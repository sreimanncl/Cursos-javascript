// Debugging es el término para solucionar bugs. Los bugs (“bichos” en inglés) son errores en la aplicación, saber cómo solucionarlos de manera eficiente es clave para tu desarrollo como profesional.

// Todo navegador dispone de Dev tools o herramientas de desarrollador, que es un conjunto de características del código de la página web, una de estas es el debugging.

// La consola del navegador es importante para ver qué está pasando con el código generado. La consola se muestra con la combinación de teclas F12 / Ctrl + Shift + I / Cmd+Opt+I o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).

// Código de ejemplo
// El código de ejemplo que se usará en las Dev Tools será el siguiente:

var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
  }
}

hello()
// Palabra reservada debugger
// La palabra reservada debugger sirve para detener la ejecución del programa, pero solo funciona si el panel de las herramientas de desarrollo está abierto. Este panel te mostrará información sobre el código hasta la línea del debugger.

// Ejecuta el código de prueba que contenga la palabra reservada debugger en la consola de tu navegador, puedes hacerlo en una página en blanco tan solo poniendo about:blank como una URL.

var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging
  }
}

hello()
// Al momento de ejecutar el código te aparecerá el panel de debugging.

// Herramientas de desarrollador de Chrome
// En el panel de información, existe un apartado “Scope” que muestra el *scope/ de cada variable correspondiente al punto donde la ejecución se detuvo.

// Sección de Scope de las DevTools de Chrome
// Breakpoints
// Los breakpoints son puntos donde la ejecución del programa se parará. Para activarlos se debe dar clic en la línea de código que se desea parar.

// Para concluir, deberías aprender a utilizar las herramientas de desarrollo web para ser más eficiente, y de esta forma encontrar de manera eficiente la causa de un error o un comportamiento no deseado que provocaría un bug.