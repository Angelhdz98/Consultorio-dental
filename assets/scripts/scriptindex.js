//revisión de que se haya conectado correctamente
//console.log("Estoy vivo");
const nav =document.querySelector("#nav");//regresa el primer elemento con el nombre que le pongamos en su interior debe ser un string que contenga una o varias selectores
const abrir= document.querySelector("#botonAbrir");
const cerrar= document.querySelector("#botonCerrar");
console.log("variables guardadas");
console.log(nav);

//define una función que va a ser llamada cada cuando el evento especificado es entregado/le ocurre al objetivo los objetivos comunes son elementos o sus hijos, documentos o la ventana, pero el objetivo debe de ser un objeto que soporte la acción 
/*syntax
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
type: un string representando el caso sensable a escuchar (me imagino que si no escucha no actúa)
listener: el objeto que recibe una notificaciónel (objeto que realiza la interfaz de eventos ) cuando el evento del tipo especificado ocurre 
options (opcional):un objeto que especifica caracteristicas del oyente del evento las opciones disponibles son
    -capture: un booleano indicando que eventos de este tipo van a ser enviado al oyente registrado antes de ser enviado al Objetivo del evento debajo del arbol del DOM. Si no se especifica el valor predeterminado es falso 
    -once: un valor booleano que indique que el oyente debe ser invocado como maximo una vez después de ser agregado. si es true, el oyente sería removido cuando es invocado si no se especifica es falso 
    -passive: Un valor booleano que, si es verdadero, indica que la función especificada por el oyente nunca llamará a preventDefault(). Si un oyente pasivo llama a preventDefault(), el agente de usuario no hará nada más que generar una advertencia en la consola.
    -signal: Una señal de aborto. El oyente se eliminará cuando se llame al método abort() del objeto AbortSignal dado. Si no se especifica, no se asocia ningún AbortSignal con el oyente
useCapture: Un valor booleano que indica si los eventos de este tipo se enviarán al oyente registrado antes de enviarse a cualquier EventTarget debajo de él en el árbol DOM. Los eventos que se propagan hacia arriba a través del árbol no activarán un oyente designado para utilizar la captura. La propagación y captura de eventos son dos formas de propagar eventos que ocurren en un elemento anidado dentro de otro elemento, cuando ambos elementos han registrado un identificador para ese evento. El modo de propagación de eventos determina el orden en que los elementos reciben el evento. Consulte Eventos de nivel 3 de DOM y Orden de eventos de JavaScript para obtener una explicación detallada.


*/
//agregamos visible como clase al nav

cerrar.addEventListener("click",()=>{//recuerda que toda función va acompañada de sus parentesis para los parametros de entrada aunque no los tenga 
    nav.classList.remove("visible")
});

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    console.log("nav list visible");
});//al hacer click sobre el botón abrir se muestra la barra de navegación   
