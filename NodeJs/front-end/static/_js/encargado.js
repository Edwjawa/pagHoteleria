
const radioButtons = document.querySelectorAll('input[type= "radio"]');
const contChan = document.getElementById("change2");
const sendPetition = document.getElementById('send');
const contenedor = document.getElementById("change");
const flex = document.getElementById("flex");
const tabla = document.getElementById("tabla");
const view = document.getElementById("button");

var toggleSwitch = document.getElementById('ToogleSwitch');
var no = "";
var nombre = "";
var dir = "";
var capacity = "";
var del = "";
var table = "hotel (idHotel, numDocUsHot, nombreHot, direccionHot, descripcionHot, imagenHot, capacidadMaxHot, catidadHabitacionesHot)";

var mem = "Agregar";

//Change Table
var UITabla = [
                `
                <table>
                    <thead>
                        <tr id="Principal">
                            <th>No.</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Capacidad</th>
                            <th>Cantidad Habitaciones</th>
                        </tr>
                    </thead>
                `, `
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Camas Niños</th>
                            <th>Camas Adultos</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                `, `
                <table>
                    <thead>
                        <tr>
                        <th>No. Ocupante</th>
                        <th>Ocupante</th>
                        <th>Costo</th>
                    </tr>
                </thead>
                `];

const act = document.getElementById('arrow');
const tipoTabla = () => {
    if (toggleSwitch.checked) {
        table = "habitacion (idHabitacion, HabIdHotel, cantidadCamasNiñosHab, cantidadCamasAdultoHab, estadoHab, descripcionHab, costoHab, ImagenHab)";
    } else {
        table = "hotel (idHotel, numDocUsHot, nombreHot, direccionHot, descripcionHot, imagenHot, capacidadMaxHot, catidadHabitacionesHot)";
    }
    click1(toggleSwitch.checked);
};
const sendView = async (information, url, type) => {
    try {
        await fetch(url, {
            method: type,
            headers: {
                "Content-Type": "application/json"
            },
            body: information
        }).then(response => response.json())
            .then(data => {
                verify = data[0]
                return verify;
            }).then(() => {
                act.classList.remove('fa-solid', 'fa-rotate-right', 'fa-spin-pulse');
                act.classList.add('fa-solid', 'fa-rotate-right');
            });
    } catch (error) {
        act.classList.remove('fa-solid', 'fa-rotate-right', 'fa-spin-pulse');
        act.classList.add('fa-solid', 'fa-rotate-right');
        console.log("El error fue: " + error);
        return null;
    }
}
const buildTable = (res) => {
    if (UITabla.length >= 2){
        let newUITabla = "";
        let newUITablas = "";
        for (let x = 0; x < UITabla.length; x++) {
            const obj = Object.values(res[x]);
            newUITabla = UITabla[x] + '<tbody><tr>';
            for (let z = 0; z < obj.length; z++) {
                console.log("Contenido: " + obj[z]);
                if (z === obj.length - 1) {
                    newUITabla = newUITabla + '<td>' + obj[z] + '</td></tbody></tr></table>';
                } else {
                    newUITabla = newUITabla + '<td>' + obj[z] + '</td>';
                }
            }
            newUITablas = newUITablas + newUITabla;
        }
        tabla.innerHTML = newUITablas;
    }else{
        UITabla = UITabla + '<tbody><tr>';
        for (let x = 0; x < res.length; x++) {
            const obj = Object.values(res[x]);
            for (let z = 0; z < obj.length; z++) {
                if (z === obj.length - 1) {
                    UITabla = UITabla + '<td>' + obj[z] + '</td></tbody></tr></table>';
                } else {
                    UITabla = UITabla + '<td>' + obj[z] + '</td>';
                }

            }
        }
        tabla.innerHTML = UITabla;
    }
}

const switchTable = async (checkboxState) => {
    let information = "";
    let url = "http://localhost:3000/read";
    let type = "POST";
    let res = [{
        No: "111",
        Nombre: "Kick",
        Direccion: "Clover 10th",
        Capacidad: 690,
        Cantidad_Habitaciones: 69
    },{
        No: "111",
        Nombre: "Kick",
        Direccion: "Clover 10th",
        Capacidad: 690,
    },{
        No: "111",
        Nombre: "Kick",
        Direccion: "Clover 10th",
    }];
    switch (checkboxState) {
        case true:
            UITabla = [`
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Camas Niños</th>
                        <th>Camas Adultos</th>
                        <th>Estado</th>
                    </tr>
                </thead>
            `]
            tabla.innerHTML = UITabla + '</table>';
            information = JSON.stringify({
                data: "habitacion"
            });
            res = [await sendView(information, url, type)];
            if (res[0] !== null && res[0] !== undefined) {
                buildTable(res);
            }else{
                tabla.innerHTML = UITabla + '</table>';
            }
            break;
        case false:
            UITabla = [`
                <table>
                    <thead>
                        <tr id="Principal">
                            <th>No.</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Capacidad</th>
                            <th>Cantidad Habitaciones</th>
                        </tr>
                    </thead>
            `]
            tabla.innerHTML = UITabla + '</table>';
            information = JSON.stringify({
                data: "hotel"
            });
            res = [await sendView(information, url, type)];
            if (res[0] !== null && res[0] !== undefined) {
                buildTable(res);
            }else{
                tabla.innerHTML = UITabla + '</table>';
            }
            break;
        default:
            UITabla = [
            `
            <table>
                <thead>
                    <tr id="Principal">
                        <th>No.</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Capacidad</th>
                        <th>Cantidad Habitaciones</th>
                    </tr>
                </thead>
            `, `
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Camas Niños</th>
                        <th>Camas Adultos</th>
                        <th>Estado</th>
                    </tr>
                </thead>
            `, `
            <table>
                <thead>
                    <tr>
                    <th>No. Ocupante</th>
                    <th>Ocupante</th>
                    <th>Costo</th>
                </tr>
            </thead>
            `];
            tabla.innerHTML = UITabla[0] + '</table>' + UITabla[1] + '</table>' + UITabla[2] + '</table>';
            information = JSON.stringify({
                data: "hotel"
            });
            res = await sendView(information, url, type);
            information = JSON.stringify({
                data: "habitacion"
            });
            res = [res, await sendView(information, url, type)];
            if (res[0] !== null && res[0] !== undefined && res[1] !== null && res[1] !== undefined) {
                buildTable(res);
            }else{
                tabla.innerHTML = UITabla[0] + '</table>' + UITabla[1] + '</table>' + UITabla[2] + '</table>';
            }
            break;
    }
}

const click1 = async (checkboxState) => {
    act.classList.remove('fa-solid', 'fa-rotate-right');
    act.classList.add('fa-solid', 'fa-rotate-right', 'fa-spin-pulse');
    flex.classList.remove('flex-on');
    flex.classList.add('flex-off');
    switchTable(checkboxState);

}
//

//Change UI
var UI = `
        <div class="row">
            <div class="txt_field" id="txt_field">
                <input type="text" class="text" name="no" id="no" required>
                <span class="span" id="span1"></span>
                <label class="tlabel" id="lblNo">No</label>
            </div>
            <div class="txt_field">
                <input type="text" class="text" name="nombre" id="nombre" required>
                <span class="span" id="span2"></span>
                <label class="tlabel" id="lblNombre">Nombre</label>
            </div>
        </div>
        <div class="row" >
            <div class="txt_field">
                <input type="text" class="text" name="dir" id="dir" required>
                <span class="span" id="span3"></span>
                <label class="tlabel" id="lblDir">Direccion</label>
            </div>
            <div class="txt_field">
                <input type="text" class="text" name="capacity" id="capacity" required>
                <span class="span" id="span4"></span>
                <label class="tlabel" id="lblCapacity">Capacidad</label>
            </div>
        </div>
        `;
const delUI = (container) => {
    container.innerHTML =
        `
    <div class="row" >
        <div class="txt_field">
            <input type=\"text\" class=\"text\" id=\"del\" name=\"del\" required>
            <span class="span" id="span5"></span>
            <label class="tlabel" id="lblDel">No. a eliminar</label>
        </div>
    </div>
    `
    flex.classList.remove('flex-off');
    flex.classList.add('flex-on');
}
const updUI = (container) => {
    container.innerHTML = UI;
    flex.classList.remove('flex-off');
    flex.classList.add('flex-on');
}
const addUI = (container) => {
    container.innerHTML = UI;
    flex.classList.remove('flex-off');
    flex.classList.add('flex-on');
}
const changeUI = (e) => {

    switch (e.target.value) {
        case "Agregar":
            mem = "Agregar";
            tipoTabla();
            addUI(contenedor);
            break;
        case "Actualizar":
            mem = "Actualizar";
            tipoTabla();
            updUI(contenedor);
            break;
        case "Eliminar":
            mem = "Eliminar";
            tipoTabla();
            delUI(contenedor);
            break;
    }

}
//

//Validate Inputs
const validator = /^[a-zA-Z0-9_]/;
const verInfo = (e, replace, span) => {
    var elemen = e.target.value;
    if (validator.test(elemen)) {
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.add('tlabel-correct');
        document.getElementById(span).classList.add('span-correct');
    } else if (elemen == "" || elemen == null) {
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(span).classList.remove('span-incorrect');
        document.getElementById(replace).classList.remove('tlabel-incorrect');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel');
        document.getElementById(span).classList.add('span');
    } else {
        document.getElementById(span).classList.remove('span');
        document.getElementById(span).classList.remove('span-correct');
        document.getElementById(replace).classList.remove('tlabel');
        document.getElementById(replace).classList.remove('tlabel-correct');
        document.getElementById(replace).classList.add('tlabel-incorrect');
        document.getElementById(span).classList.add('span-incorrect');
    }
}
const validarInput = (e) => {
    switch (e.target.name) {
        case "no":
            no = e.target.value;
            verInfo(e, 'lblNo', 'span1');
            break;
        case "nombre":
            nombre = e.target.value;
            verInfo(e, 'lblNombre', 'span2');
            break;
        case "dir":
            dir = e.target.value;
            verInfo(e, 'lblDir', 'span3');
            break;
        case "capacity":
            capacity = e.target.value;
            verInfo(e, 'lblCapacity', 'span4');
            break;
        case "del":
            del = e.target.value;
            verInfo(e, 'lblDel', 'span5');
            break;
    };
}
//

const sendInfo = async (information, url, type) => {
    try {
        await fetch(url, {
            method: type,
            headers: {
                "Content-Type": "application/json"
            },
            body: information
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    } catch (error) {
        act.classList.remove('fa-solid', 'fa-rotate-right', 'fa-spin-pulse');
        act.classList.add('fa-solid', 'fa-rotate-right');
        console.log("El error fue: " + error);
    }
}


sendPetition.addEventListener('click', () => {
    let information = "";
    let url = "";
    let type = "";
    switch (mem) {
        case "Agregar":
            information = JSON.stringify({
                type: table,
                data: "\'" + no + "\'," + + "\'" + nombre + "\'," + dir + "\'," + capacity + "\'"
            });
            type = "POST";
            url = "http://localhost:3000/reg";
            sendInfo(information, url, type);
            break;
        case "Actualizar":
            information = JSON.stringify({
                type: table,
                data: "\'" + no + "\'," + + "\'" + nombre + "\'," + dir + "\'," + capacity + "\'"
            });
            type = "PUT"
            url = "http://localhost:3000/updt";
            sendInfo(information, url, type);

            break;
        case "Eliminar":
            information = JSON.stringify({
                del: del
            });
            type = "DELETE";
            url = "http://localhost:3000/erase";
            sendInfo(information, url, type);
            break;
    }
    sendInfo(information, url, type);
});

toggleSwitch.addEventListener('change', (e) => {
    tipoTabla();
    if (toggleSwitch.checked) {
        document.getElementById('config1').classList.remove('bold');
        document.getElementById('config2').classList.remove('no-bold');
        document.getElementById('config1').classList.add('no-bold');
        document.getElementById('config2').classList.add('bold');
        UI =
            `
        <div class="row">
            <div class="txt_field" id="txt_field">
                <input type="text" class="text" name="no" id="no" required>
                <span class="span" id="span1"></span>
                <label class="tlabel" id="lblNo">No</label>
            </div>
            <div class="txt_field">
                <input type="text" class="text" name="nombre" id="nombre" required>
                <span class="span" id="span2"></span>
                <label class="tlabel" id="lblNombre">Camas Niños</label>
            </div>
        </div>
        <div class="row" >
            <div class="txt_field">
                <input type="text" class="text" name="dir" id="dir" required>
                <span class="span" id="span3"></span>
                <label class="tlabel" id="lblDir">Camas Adultos</label>
            </div>
            <div class="txt_field">
                <input type="text" class="text" name="capacity" id="capacity" required>
                <span class="span" id="span4"></span>
                <label class="tlabel" id="lblCapacity">Estado</label>
            </div>
        </div>
        `
        switch (mem) {
            case "Agregar":
                addUI(contenedor);
                break;
            case "Actualizar":
                updUI(contenedor);
                break;
            case "Eliminar":
                delUI(contenedor);
                break;
        }

    } else {
        document.getElementById('config1').classList.remove('no-bold');
        document.getElementById('config2').classList.remove('bold');
        document.getElementById('config1').classList.add('bold');
        document.getElementById('config2').classList.add('no-bold');
        UI =
            `
        <div class="row">
            <div class="txt_field" id="txt_field">
                <input type="text" class="text" name="no" id="no" required>
                <span class="span" id="span1"></span>
                <label class="tlabel" id="lblNo">No</label>
            </div>
            <div class="txt_field">
                <input type="text" class="text" name="nombre" id="nombre" required>
                <span class="span" id="span2"></span>
                <label class="tlabel" id="lblNombre">Nombre</label>
            </div>
        </div>
        <div class="row" >
            <div class="txt_field">
                <input type="text" class="text" name="dir" id="dir" required>
                <span class="span" id="span3"></span>
                <label class="tlabel" id="lblDir">Direccion</label>
            </div>
            <div class="txt_field">
                <input type="text" class="text" name="capacity" id="capacity" required>
                <span class="span" id="span4"></span>
                <label class="tlabel" id="lblCapacity">Capacidad</label>
            </div>
        </div>
        `
        switch (mem) {
            case "Agregar":
                addUI(contenedor);
                break;
            case "Actualizar":
                updUI(contenedor);
                break;
            case "Eliminar":
                delUI(contenedor);
                break;
        }
    }
});

contenedor.addEventListener("input", function (event) {

    if (event.target && event.target.nodeName === "INPUT") {
        validarInput(event);
    }
});

radioButtons.forEach((radio) => {

    radio.addEventListener('click', changeUI)//.then(() => {});

});

view.addEventListener('click', () => {
    let checkboxState = null;
    click1(checkboxState);
});

const main = async () => {
    let verify;
    let information;
    let checkboxState = null;
    click1(checkboxState);
}

window.onload = main();


