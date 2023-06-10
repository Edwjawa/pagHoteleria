
var indexInfo;
var container = document.getElementById("Sub-menu");
var displayName = document.getElementById("test");
const main = () => {
    indexInfo = localStorage.getItem("userData");
    
    try {
        indexInfo = JSON.parse(indexInfo);
        if (indexInfo !== null) {
            displayName.innerHTML = "<p>"+indexInfo["name"]+"  <i class=\"fa-solid fa-user\" id=\"logoUser\"></i></p>"
            container.innerHTML = "<a href=\"../templates/Actualizar.html\" class=\"Sub-menu-link\"><p>Actualizar Perfil</p></a><button type=\"button\" onclick=\"closeSesion()\"class=\"Sub-menu-link\"><p>Cerrar Sesion</p></button> <button type=\"button\" onclick=\"eraseSesion()\"class=\"Sub-menu-link\"><p>Borrar Cuenta</p></button>";
        }else{
            displayName.innerHTML = "<div class=\"Container-user\"><div id=\"Log-in\"><p id=\"text\">Inicia Sesión</p></div><div id=\"user\"><i class=\"fa-regular fa-user\"></i></div></div>";
            container.innerHTML = "<a href=\"../templates/Login.html\" class=\"Sub-menu-link\"><p>Iniciar Sesión</p></a><a href=\"../templates/Registro.html\" class=\"Sub-menu-link\"><p>Registrarse</p></a>";
        } 
    } catch (error) {
        displayName.innerHTML = "<div class=\"Container-user\"><div id=\"Log-in\"><p id=\"text\">Inicia Sesión</p></div><div id=\"user\"><i class=\"fa-regular fa-user\"></i></div></div>";
        container.innerHTML = "<a href=\"../templates/Login.html\" class=\"Sub-menu-link\"><p>Iniciar Sesión</p></a><a href=\"../templates/Registro.html\" class=\"Sub-menu-link\"><p>Registrarse</p></a>";
    }
    
      
}
window.onload = main();

