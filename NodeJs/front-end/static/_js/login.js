const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const validator = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/

var userData = "";

const validarForm = (e) => {
    switch (e.target.name){
        case "correo":
            if(validator.test(e.target.value)){
                document.getElementById('txtcorreo').classList.remove('txt_field');
                document.getElementById('lblcorreo').classList.add('txt_field-up');
                document.getElementById('txtcorreo').classList.add('txt_field-correct');
            }else if(e.target.value == ""){
                document.getElementById('txtcorreo').classList.remove('txt_field-correct');
                document.getElementById('txtcorreo').classList.remove('txt_field-incorrect');
                document.getElementById('txtcorreo').classList.add('txt_field-null');
                document.getElementById('lblcorreo').classList.remove('txt_field-up');
                document.getElementById('txtcorreo').classList.add('txt_field');
            } 
            else{
                document.getElementById('txtcorreo').classList.remove('txt_field-correct');
                document.getElementById('txtcorreo').classList.add('txt_field-incorrect');
                document.getElementById('lblcorreo').classList.add('txt_field-up');
                document.getElementById('txtcorreo').classList.add('txt_field');
            }
        break;
        case "password":
            if(e.target.value != ""){
                document.getElementById('txtpassword').classList.remove('txt_field');
                document.getElementById('lblpassword').classList.add('txt_field-up');
                document.getElementById('txtpassword').classList.add('txt_field-correct');
            }else if(e.target.value == ""){
                document.getElementById('txtpassword').classList.remove('txt_field-correct');
                document.getElementById('txtpassword').classList.remove('txt_field-incorrect');
                document.getElementById('txtpassword').classList.add('txt_field-null');
                document.getElementById('lblpassword').classList.remove('txt_field-up');
                document.getElementById('txtpassword').classList.add('txt_field');
            } 
            else{
                document.getElementById('txtpassword').classList.remove('txt_field-correct');
                document.getElementById('txtpassword').classList.add('txt_field-incorrect');
                document.getElementById('lblpassword').classList.add('txt_field-up');
                document.getElementById('txtpassword').classList.add('txt_field');
            }
        break;
    };
}
const validarButton = () => {
    let button = document.getElementById("in");
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email)
    console.log(password)
    if (email.length !== 0 && password.length !== 0) {
        button.classList.remove('in-invalid');
        button.classList.add('in-valid');
    } else {
        button.classList.remove('in-valid');
        button.classList.add('in-invalid');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
    input.addEventListener('keyup', validarButton);
    input.addEventListener('blur', validarButton);
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
     /*Cambios*/
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    var verify;
    let information = JSON.stringify({
        data: email
    });
 

    fetch("http://localhost:3000/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: information
    })
    .then(response => response.json())
    .then(data => {

        verify = data[0]
        
        try {
            if (password == verify["contraseñaUS"]) {
                userData = JSON.stringify({
                    name: verify["nombreUs"],
                    lastname: verify["apellidoUS"],
                    cel: verify["celularUs"],
                    gender: verify["generoUs"],
                    tipDoc: verify["tipoDocUs"],
                    Num_Doc: verify["numDocUs"],
                    date: verify["fecNacimientoUs"],
                    email: verify["correoUs"],
                    password: verify["contraseñaUS"]
                });
                window.onload = localStorage.setItem("userData", userData);
                window.location.href = "http://127.0.0.1:5500/front-end/templates/index.html";
            }else{
                alert("Su contraseña o correo no coinciden, verifique y vuelva a colocar sus datos.");
            }
        } catch (error) {
            alert("No existe su correo en la base de datos, por favor regitrese en nuestra pagina web primero");
        }
            
    });
});
