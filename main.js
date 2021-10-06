function myform(event){
    event.preventDefault()
    let nombre = document.forms["formul"]["name"].value
    let apellido = document.forms["formul"]["lname"].value
    let edad = document.forms["formul"]["age"].value
    let correo = document.forms["formul"]["mail"].value
    let condic  = document.getElementById("myCheck")

    flag = false

    if (condic.checked == false){
        alert('Aceptar las condiciones')
    }else{
        
        if (nombre == ""|| !isNaN(nombre)){
            flag = true
            document.getElementById("name").classList.add("error")
        }else{ 
            document.getElementById("name").classList.remove("error")
        }
        
        if (apellido == ""|| !isNaN(apellido)){
            flag = true
            document.getElementById("lname").classList.add("error")
        }else{ 
            document.getElementById("lname").classList.remove("error")
        }

        if (edad == "" || isNaN(edad)){
            flag = true
            document.getElementById("age").classList.add("error")
        }else{ 
            document.getElementById("age").classList.remove("error")
        }

        if (correo == ""|| !isNaN(correo)){
            flag = true
            document.getElementById("mail").classList.add("error")
        }else{ 
            document.getElementById("mail").classList.remove("error")
        }
        
        if (flag){
            alert('Completa correctamente todos los campos')
        }
        else{
            alert(`Esoooo`)
            document.getElementById('formulario').reset()
        }
    }
        
}