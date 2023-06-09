const radioButtons = document.querySelectorAll('input[type= "radio"]');
const container = document.getElementById("Content-info");



const createTable = (container, data) => {

}

const delUI = (container) => {
    container.innerHTML = 
    `
    <label for="">Id Expample<input type="text"></label>
    
    
    <!--
        Seleccionador entre Hotel y Habitacion
        Input Mostrar Nombre
        Boton Confirmar Borrado
    -->
    `
}

const updUI = (container) => {
    container.innerHTML = 
    `
    <label for="">Id Expample<input type="text"></label>
    <label for="">Nombre Example<input type="text"></label>
    <label for="">Hotel Example<input type="text"></label>
    
    <!--
        Seleccionador entre Hotel y Habitacion
        idHotel, 
        numDocUsHot, 
        nombreHot, direccionHot, 
        escripcionHot, capacidadMaxHot, 
        cantidadHabitacionesHot
    -->
    `
}

const addUI = (container) => {
    container.innerHTML = 
    `
    <label for="">Id Expample<input type="text"></label>
    <label for="">Nombre Example<input type="text"></label>
    <label for="">Hotel Example<input type="text"></label>
    
    <!--
        Seleccionador entre Hotel y Habitacion
        idHotel, 
        numDocUsHot, 
        nombreHot, direccionHot, 
        escripcionHot, capacidadMaxHot, 
        cantidadHabitacionesHot
    -->
    `
}

const viewUI = (container) => {
    container.innerHTML = 
    `
    
        

    <div class="tablas">  

        <div id=\"Info-Hotel\">
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Capacidad</th>
                        <th>Cantidad Habitaciones</th>
                    </tr>
                </thead>
            </table>
        </div>
        

        <div id=\"tabla\">
            <table>
                <thead>
                    <tr id=\"Principal\">
                        <!-- Nombre y Apellido Concardenados -->
                        <th>No.</th>
                        <th>Camas Niños</th>
                        <th>Camas Adultos</th>
                        <th>Estado</th>
                        <th>No. Ocupante</th>
                        <th>Ocupante</th>
                        <th>Costo</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
    `
}

const changeUI = (e) => {
    switch (e.target.value){
        case "View":
            console.log("Registro");
            viewUI(container);
            break;
        case "Agregar":
            console.log("Agregar");
            addUI(container);
            break;
        case "Actualizar":
            console.log("Actualizar");
            updUI(container);
            break;
        case "Eliminar":
            console.log("Eliminar");
            delUI(container);
            break;
    }
}

radioButtons.forEach((radio) => {
    radio.addEventListener('click', changeUI);
});

const main = () => {
    viewUI(container);
    let hab = document.getElementById("tabla");
    let hot = document.getElementById("Info-Hotel");
    let verify;
    let information;

    information = JSON.stringify({
        data: "hotel"
    });

    fetch("http://localhost:3000/read",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: information
    })
    .then(response => response.json())
    .then(data => {
        verify = data[0]
        console.log(verify);
    });

    information = JSON.stringify({
        data: "habitacion"
    });

    fetch("http://localhost:3000/read",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: information
    })
    .then(response => response.json())
    .then(data => {
        verify = data[0]
        console.log(verify);
    });

    
}

window.onload = main();


