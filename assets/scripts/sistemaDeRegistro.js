/**sistema para registrar paciente y mostrarlos en tarjetas
    
    //primer paso: obtener todos los elemenos de nuestro HTML y guardarlos en variables 
 */

    //inputs separados, botón, textoConfirmación

    let nombrePaciente=document.getElementById("nombrePaciente");//input nombre
    let edadPaciente=document.getElementById("edadPaciente");//input edad 
    let botonRegistrarPaciente=document.getElementById("btnRegistrarPaciente"); // input botón
    let mensajeConfirmacion= document.getElementById("mensajeConfirmacion");//Container mensaje de confirmación 
    //Array para almacenar a mis pacientes 

    let pacientes = [];

    // Función para registrar un nuevo paciente
    function registrarPaciente(){
        //obtengo el atributo value de mi input 
        let valorNombrePaciente= nombrePaciente.value;
        let valorEdadPaciente= edadPaciente.value;
        
        //array para guardar la información del paciente
        let paciente= {
            nombre: valorNombrePaciente,
            edad:valorEdadPaciente,
            citas:[]
        };

        pacientes.push(paciente);//arra.push (valorAAgregar)

        mostrarInformacionPaciente(paciente);//invocación de otrafunción
        //mensaje de confirmación
        console.log("imprimimos valor");
        mensajeConfirmacion.textContent="Paciente registrado correctamente";
        
        generarTarjetaPaciente(paciente);// Invocación de una tareja para generar tarjetas las invocamos antes de declararlas
        return paciente;

    }

// Funcion para mostrar info del paciente en la consola
function mostrarInformacionPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
/*    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });*/
}//aqui termina mi funcion mostrarInfoPaciente


   

    //función para generar tarjeta de paciente
    function generarTarjetaPaciente(paciente){
        //crear  
        let tarjetaDiv=document.createElement("div");
        tarjetaDiv.className= "col";//aquí le eespecifico que es una columna 
        //crear el contenido de la tarjeta 
        tarjetaDiv.innerHTML=`<div class="card border-info mb-3">
            <div class="card-header">Paciente</div>
                <div class="card-body">
                <h5 class="card-title">${paciente.nombre}</h5>
                <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
                <p>Edad: ${paciente.edad}</p>
            </div>                                                                  
        </div>`
        //poner
    contenedorTarjetas.appendChild(tarjetaDiv);
    //evento 
    }
    botonRegistrarPaciente.addEventListener("click",registrarPaciente );



