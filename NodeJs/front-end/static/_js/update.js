
const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
var checkbox = document.getElementById('checkbox1');

const validator = {
    any: /^[a-zA-Z0-9_]/,
    onlyNumber: /^\d+$/,
    email: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/
}

const verChanges = (e, replace, span) => {
    var selected = e.target.value;
    if (selected !== "null") {
        document.getElementById(span).classList.remove('txt_field');
        document.getElementById(replace).classList.remove('select-not');
        document.getElementById(replace).classList.add('select-correct');
        document.getElementById(span).classList.add('txt_field-correct');
    }else{
        document.getElementById(span).classList.remove('txt_field-correct');
        document.getElementById(replace).classList.remove('select-correct');
        document.getElementById(replace).classList.add('select-not');
        document.getElementById(span).classList.add('txt_field');
    }
}

const notNull = (e, replace, span) => {
    if (e.target.value) {
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.add('tlabel-correct');
        document.getElementById(span).classList.add('span-correct'); 
    }else {
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel');
        document.getElementById(span).classList.add('span');
    }
}

const numbers = (e, replace, span) => {
    var elemen = e.target.value;
    if(validator.onlyNumber.test(elemen)){
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.add('tlabel-correct');
        document.getElementById(span).classList.add('span-correct');        
    }else if(elemen == "" || elemen == null){
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel');
        document.getElementById(span).classList.add('span');
    }else{
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel-incorrect');
        document.getElementById(span).classList.add('span-incorrect');
    }
}

const emailInfo = (e, replace, span) => { 
    var elemen = e.target.value;
    if(validator.email.test(elemen)){
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.add('tlabel-correct');
        document.getElementById(span).classList.add('span-correct');        
    }else if(elemen == "" || elemen == null){
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel');
        document.getElementById(span).classList.add('span');
    }else{
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel-incorrect');
        document.getElementById(span).classList.add('span-incorrect');
    }
}

const verInfo = (e, replace, span) => { 
    var elemen = e.target.value;
    if(validator.any.test(elemen)){
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.add('tlabel-correct');
        document.getElementById(span).classList.add('span-correct');        
    }else if(elemen == "" || elemen == null){
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel');
        document.getElementById(span).classList.add('span');
    }else{
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel-incorrect');
        document.getElementById(span).classList.add('span-incorrect');
    }
}

const valInfo = (elemen, verElem, replace, span) =>{
    var elemen2 = document.getElementById(elemen).value;
    var verElem2 = document.getElementById(verElem).value;
    if (verElem2 == null || verElem2 == "") {
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.add('tlabel');
        document.getElementById(span).classList.add('span');
    }else if(elemen2 !== verElem2){
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel-incorrect');
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(span).classList.add('span-incorrect');
    }else if(elemen2 == verElem2 && verElem2 !== null){
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.add('tlabel-correct');
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(span).classList.add('span-correct');
    }else{
        console.log("NoSe");
    }
}

const validarInput = (e) => {
    switch (e.target.name){
        case "nombre":
            verInfo(e, 'lblNombre', 'span1');
        break;
        case "apellidos":
            verInfo(e, 'lblApellidos', 'span2');
        break;
        case "numdoc":
            numbers(e, 'lblNumDoc', 'span3');
        break;
        case "numcel":
            numbers(e, 'lblNumCel', 'span4');
        break;
        case "date":
            notNull(e, 'lblDate', 'span5');
        break;
        case "ciudad":
            verInfo(e, 'lblCiudad', 'span6');
        break;
        case "email":
            emailInfo(e, 'lblEmail', 'span7');
            valInfo('correo1', 'correo2', 'lblConEmail', 'span8');
        break;
        case "conemail":
            valInfo('correo1', 'correo2', 'lblConEmail', 'span8');
        break;
        case "password":
            verInfo(e, 'lblPassword', 'span9');
            valInfo('password1', 'password2', 'lblConPassword', 'span10');
        break;
        case "conpassword":
            valInfo('password1', 'password2', 'lblConPassword', 'span10');
        break;
    };
}

const validarSelect = (e) =>{
    switch (e.target.name){
        case "DocType":
            verChanges(e, 'DocType', 'docCont');
            break;
        case "Sex":
            verChanges(e, 'Sex', 'sexCont');
            break;
    }
}

window.onload = () => {
    let name = document.getElementById('nombre');
    let lastname = document.getElementById('apellidos');
    let birthDate = document.getElementById('date');
    let docType = document.getElementById('DocType');
    let sex = document.getElementById('Sex');
    let ciudad = document.getElementById('ciudad');
    let email = document.getElementById('correo1');
    let password = document.getElementById('password1');
    let numcel = document.getElementById('numcel');
    let numdoc = document.getElementById('numdoc');

    let info = JSON.parse(localStorage.getItem("userData"));
    email.value = info["email"];

    let information = JSON.stringify({
        data: email.value
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
        let jsonData = JSON.stringify(data[0]);

        info = JSON.parse(jsonData);
        console.log(info);
        name.value = info["nombreUs"];
        lastname.value = info["apellidoUS"];
        birthDate.value = info["fecNacimientoUs"];
        docType.value = info["tipoDocUs"];
        sex.value = info["generoUs"];
        ciudad.value = "Bogota";
        password.value = info["contraseñaUS"];
        numcel.value = info["celularUs"];
        numdoc.value = info["numDocUs"];

    });
    

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarInput);
    input.addEventListener('blur', validarInput);
});

selects.forEach((select) => {
    select.addEventListener('change', validarSelect);
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let tipoUsu = 1;
    let name = document.getElementById('nombre').value;
    let lastname = document.getElementById('apellidos').value;
    let birthDate = document.getElementById('date').value;
    let docType = document.getElementById('DocType').value;
    let sex = document.getElementById('Sex').value;
    let email = document.getElementById('correo1').value;
    let verEmail = document.getElementById('correo2').value;
    let password = document.getElementById('password1').value;
    let verPass = document.getElementById('password2').value;
    let numcel = document.getElementById('numcel').value;
    let numdoc = document.getElementById('numdoc').value;

    if (email == verEmail && password == verPass) {
            if (sex !== "null" && docType !== "null") {
                if (numcel.length == 10 && numdoc.length <= 10){
                            let information = JSON.stringify({
                                numDoc: numdoc,
                                tipoUsu:tipoUsu,
                                tipoDoc: docType,
                                name: name,
                                lastname: lastname,
                                numcel:numcel,
                                typegender:sex,
                                birthDate: birthDate,
                                email:verEmail,
                                password: password
                            });
                            console.log(information);
                            fetch("http://localhost:3000/put",{
                                method: "PUT",
                                headers:{
                                    "Content-Type": "application/json"
                                },
                                body: information
                                
                            }).then(data =>{
                                window.onload = localStorage.setItem("userData", information);
                                window.location.href = "http://127.0.0.1:5500/front-end/templates/index.html";
                            });
                }else if (numcel.length !== 10){
                    window.alert("Su numero celular contiene: " + numcel.length + " digitos"); 
                } else{
                    window.alert("Su documento contiene: " + numdoc.length + " digitos"); 
                }

            } else if (sex == "null") {
                window.alert("Elija su genero"); 
            }else{
                window.alert("Elija su tipo de documento"); 
            }
        }else if (email !== verEmail) {
            window.alert("Verifique que su correo sea el que corresponda"); 
        }else{
            window.alert("Verifique que se a escrito bien la contraseña"); 
        }
    });