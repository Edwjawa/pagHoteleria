const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
var checkbox = document.getElementById('checkbox1');
var frase_1= "Registrate";
var frase_2= "Gestiona tu Hotel";
var text = "Registrate";
var toggleSwitch = document.getElementById('ToogleSwitch');
var clien = document.getElementById('config1');
var encar = document.getElementById('config2');

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
        case "localidad":
            verInfo(e, 'lbllocalidad', 'span6');
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

inputs.forEach((input) => {
    input.addEventListener('keyup', validarInput);
    input.addEventListener('blur', validarInput);
});

selects.forEach((select) => {
    select.addEventListener('change', validarSelect);
});

const tipoPersona = (checkbox) =>{
    if(checkbox){
        return("Encargado");
    }else{
        return("Cliente");
    }
};

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        text= frase_2;
        document.getElementById('config1').classList.remove('bold');
        document.getElementById('config2').classList.remove('no-bold');
        document.getElementById('config1').classList.add('no-bold');
        document.getElementById('config2').classList.add('bold');
        document.getElementById("reg").innerHTML= "";
        document.getElementById("reg").innerHTML= text;
        /* Imagen Body */
        document.getElementById('Cliente').classList.remove('Clase-Cliente');
        document.getElementById('Cliente').classList.add('Clase-Encargado');
    } else {
        text= frase_1;
        document.getElementById('config1').classList.remove('no-bold');
        document.getElementById('config2').classList.remove('bold');
        document.getElementById('config1').classList.add('bold');
        document.getElementById('config2').classList.add('no-bold');
        document.getElementById("reg").innerHTML= "";
        document.getElementById("reg").innerHTML= text;
        /* Imagen Body */
        document.getElementById('Cliente').classList.remove('Clase-Encargado');
        document.getElementById('Cliente').classList.add('Clase-Cliente');
    }
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let docType = document.getElementById('DocType').value;
    let sex = document.getElementById('Sex').value;
    let email = document.getElementById('correo1').value;
    let verEmail = document.getElementById('correo2').value;
    let password = document.getElementById('password1').value;
    let verPass = document.getElementById('password2').value;
    let numcel = document.getElementById('numcel').value;
    let numdoc = document.getElementById('numdoc').value;
    var isChecked = document.getElementById('checkbox1').checked;
    var typeUser = tipoPersona(toggleSwitch.checked);

    if (email == verEmail && password == verPass) {
            if (sex !== "null" && docType !== "null") {
                if (numcel.length == 10 && numdoc.length <= 10){
                    if(isChecked){
                        
                            let information = {
                                tp: typeUser,
                                name: document.getElementById('nombre').value,
                                lastname: document.getElementById('apellidos').value,
                                docType: docType,
                                numdoc: numdoc,
                                numcel: numcel,
                                sex: sex,
                                date: document.getElementById('date').value,
                                city: document.getElementById('localidad').value,
                                email: email,
                                password: password
                            }
                         /*Cambios*/
                            console.log(information.tp);
                            console.log(information.name);
                            console.log(information.lastname);
                            console.log(information.docType);
                            console.log(information.numdoc);
                            console.log(information.numcel);
                            console.log(information.sex);
                            console.log(information.date);
                            console.log(information.city);
                            console.log(information.email);
                            console.log(information.password)
                         /*CambiosFin*/
                    }else {
                        alert('Por favor acepte los terminos y condiciones de nuestra pagina');
                    }
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