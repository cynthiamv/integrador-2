let usuarios = [
    [0, "Carla", "1545628984", "carla@gmail.com"],
    [1, "Pedro", "1545251245", "pedro@gmail.com"],
    [2, "Lucas", "1523357849", "lucas@gmail.com"],
    [3, "Ana", "15789456", "ana@gmail.com"],
];

let operacion = "";
let menuPrincipal = "SI";
let idUsuarioAAgregar = usuarios.length;
let nombreAAgregar = [];
let telefonoAAgregar = [];
let emailAAgregar = [];




while(menuPrincipal.toUpperCase() == "SI") {
    operacion = prompt(`Por favor, seleccione la operación que desea realizar:
    🔹[AGREGAR] un usuario 👤
    🔹[BUSCAR] un usuario 🔎
    🔹[LISTAR] todos los usuarios 📄
    🔹[ELIMINAR] un usuario 🗑️
    🔹[SALIR] del programa 🚪 ‍`);

    

    // AGREGAR USUARIO
    if (operacion.toUpperCase() == "AGREGAR") {
        let repetirOperacion = "SI";

        while (repetirOperacion == "SI") {
            nombreUsuarioAAgregar = prompt("Ingrese el nombre");
            telefonoUsuarioAAgregar = prompt("Ingrese el teléfono");
            emailUsuarioAAgregar = prompt("Ingrese el email");
            let usuarioAAgregar = [idUsuarioAAgregar, nombreUsuarioAAgregar, telefonoUsuarioAAgregar, emailUsuarioAAgregar];
            let = confirmacion = prompt(`Los datos ingresados son los siguientes:
                👤 Nombre: ${nombreUsuarioAAgregar}
                ☎️ Teléfono: ${telefonoUsuarioAAgregar}
                📧 E-Mail: ${emailUsuarioAAgregar}
                   ¿Desea confirmarlos?
                    SI / NO`);

            if (confirmacion.toUpperCase() == "SI") {
                usuarios.push(usuarioAAgregar);
                alert("El usuario fue guardado exitosamente!");
            } else {
                alert("La operación ha sido cancelada");
            }
            repetirOperacion = prompt(`¿Desea realizar el procedimiento nuevamente? 
            SI / NO`)
            repetirOperacion = repetirOperacion.toUpperCase()
        }
    }

    

    //BUSCAR USUARIO
    if (operacion.toUpperCase() == "BUSCAR") {
        let repetirOperacion = "SI"
        let datosEncontrados = false
        while (repetirOperacion.toUpperCase() == 'SI') {
            let tipoDeDato = prompt(`Desea buscar por 
            🆔 ID
            👤 Nombre
            ☎️ Telefono o
            📧 E-mail?`);
            let datoBuscado = prompt(`Por favor ingrese el dato a buscar`);

            if (tipoDeDato == "id" || "nombre" || "telefono" || "email") {
                for (let i = 0; i < usuarios.length; i++) {
                    for (let j = 0; j < usuarios[i].length; j++) {
                        if (usuarios[i][j] == datoBuscado) {
                            alert(`Los datos del usuario son: 
                            🆔 ID: ${usuarios[i][0]}
    
                            👤 Nombre:  ${usuarios[i][1]}
    
                            ☎️Teléfono:  ${usuarios[i][2]}
    
                            📧 E-Mail:  ${usuarios[i][3]}`)

                            datosEncontrados = true
                        }
                    }
                }

                if (datosEncontrados == false) {
                    alert(`El dato ingresado no existe`)
                }
            }

            repetirOperacion = prompt(`Desea realizar otra busqueda?`);
            
            repetirOperacion = repetirOperacion.toUpperCase()

        }
       
    }


    // LISTAR USUARIOS
    if (operacion.toUpperCase()  == "LISTAR") {
        let lista = "";
        for (let i = 0; i < usuarios.length; i++) {
            lista = lista + `           
                🆔 ID: ${usuarios[i][0]}
                👤 Nombre:  ${usuarios[i][1]}
                ☎️ Teléfono: ${usuarios[i][2]}
                📧 E-Mail: ${usuarios[i][3]}
                -----------------------------`        
        }
        alert(lista);

    }


    // ELIMINAR USUARIO
    if (operacion.toUpperCase() == "ELIMINAR") {
        let repetirOperacion = "SI"
        let usuarioEncontrado = false

        while (repetirOperacion .toUpperCase()== "SI") {
            let usuarioAEliminar = prompt("Por favor ingrese el ID del usuario que desea eliminar");
            for (i = 0; i < usuarios.length; i++) {
                if (usuarios[i][0] == usuarioAEliminar) {
                    confirmacion = prompt(`Los datos del usuario a eliminar son:
                 🆔 ID: ${usuarios[i][0]}
                 👤 NOMBRE: ${usuarios[i][1]}
                 ☎️ TELEFONO: ${usuarios[i][2]}
                 📧 E-MAIL: ${usuarios[i][3]}
                  Desea confirmar la operación? SI/NO
                  `)
                    
                    if (confirmacion.toUpperCase() == "SI") {
                        usuarios.splice(i, 1)
                        alert("La operacion fue realizada exitosamente")
                    } else {
                        alert("La operacion fue cancelada")
                    }
                    usuarioEncontrado = "SI"
                }
            }
            if (usuarioEncontrado == false) {
                alert("El usuario ingresado no existe.");
            }
            repetirOperacion = prompt("¿Desea realizar el procedimiento nuevamente? SI/NO");
            
            repetirOperacion = repetirOperacion.toUpperCase()
        }
    }


    // SALIR DEL PROGRAMA
    if (operacion.toUpperCase() == "SALIR") {
        let respuestaSalida = prompt("¿Está seguro que desea salir del programa? SI/NO")
        respuestaSalida = respuestaSalida.toUpperCase()
        
        if (respuestaSalida == "SI") {
            alert('Gracias por su atención, saludos!👋')
            menuPrincipal = "NO"
        } else {
            menuPrincipal = "SI"
        }
    }
}