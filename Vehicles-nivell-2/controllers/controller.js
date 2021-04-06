"use strict";
//Realitzem instancia de l'ojecte car i wheel
var car;
//Recuperem els formularis
var myCarForm = document.getElementById('carForm');
var myFormWheels = document.getElementById('formWheels');
//Recuperem el titol
var mytittle = document.getElementById('maintitle');
myCarForm.addEventListener('submit', function (event) { event.preventDefault(); submitForm(); });
function submitForm() {
    //Definim variable pel contador
    var cont = 0;
    //Recollim les dades del formulari
    var matricula = document.querySelector('#matricula');
    var marca = document.querySelector('#marca');
    var color = document.querySelector('#color');
    if (!validationCarFom(matricula.value)) {
        cont++;
    }
    if (!marca.value) {
        cont++;
    }
    if (!color.value) {
        cont++;
    }
    if (cont > 0) {
        return false;
    }
    else {
        cont = 0;
        //Creem l'objecte
        car = new Car(matricula.value, color.value, marca.value);
        //Cridem al mètode per pintar per pantalla l'objecte
        createElement(matricula.value, color.value, marca.value);
        //Cridem al mètode per amagar i mostrar els formularis
        showForm();
        //Fem reset del formulari
        myCarForm.reset();
        return true;
    }
}
myFormWheels.addEventListener('submit', function (event) { event.preventDefault(); createrWheels(); });
function createrWheels() {
    //Definim variable pel contador
    var cont = 0;
    var wheel1 = document.querySelector('#marca1');
    var diam1 = document.querySelector('#diametre1');
    var wheel2 = document.querySelector('#marca2');
    var diam2 = document.querySelector('#diametre2');
    var wheel3 = document.querySelector('#marca3');
    var diam3 = document.querySelector('#diametre3');
    var wheel4 = document.querySelector('#marca4');
    var diam4 = document.querySelector('#diametre4');
    if (!wheel1.value || !wheel2.value || !wheel3.value || !wheel4.value || !diam1 || !diam2 || !diam3 || !diam4) {
        cont++;
    }
    if (cont > 0) {
        return false;
    }
    else {
        addWheelCar(wheel1.value, diam1.value, wheel2.value, diam2.value, wheel3.value, diam3.value, wheel4.value, diam4.value);
        return true;
    }
}
//Mètode per crear element
function createElement(matricula, color, marca) {
    //Recollim id per mostrar el cotxer creat
    var msg = document.getElementById('resp');
    var element = document.createElement('div');
    element.innerHTML = "\n        <div class=\"card text-center mb-4\">\n            <div class=\"car-header\">\n            <h4 class=\"bg-success\">Dades del meu cotxe</h4>\n        </div>\n        <div class=\"card-body\" id=\"carInfo\">\n            <strong><h2><i class=\"fas fa-car\"></i></h2></strong>\n                <strong>Matricula</strong>: " + matricula + " |\n                <strong>Marca</strong>: " + marca + " |\n                <strong>Color</strong>: " + color + "\n            </div>\n        </div>";
    msg.appendChild(element);
}
//Mètode per afegir rodes al vehicle
function addWheelCar(wheel1, diam1, wheel2, diam2, wheel3, diam3, wheel4, diam4) {
    //Recuperem id per mostrar missatgeconst 
    var msg = document.getElementById('carInfo');
    var element = document.createElement('div');
    //Mostrem les dades per pantalla
    element.innerHTML = "\n    </hr>\n    <h5 class=\"m-3\">Informaci\u00F3 sobre les rodes:</h5>\n    <div class=\"d-flex justify-content-between\"> \n        <div>   \n        <strong>Marca roda 1</strong>: " + wheel1 + " \n        <strong>Diametre roda 1</strong>: " + diam1 + " mm\n        </div>\n        <div>   \n        <strong>Marca roda 2</strong>: " + wheel2 + "  \n        <strong>Diametre roda 2</strong>: " + diam2 + " mm\n        </div>\n        <div>   \n        <strong>Marca roda 3</strong>: " + wheel3 + " \n        <strong>Diametre roda 3</strong>: " + diam3 + " mm\n        </div>\n        <div>   \n        <strong>Marca roda 4</strong>: " + wheel4 + " \n        <strong>Diametre roda 4</strong>: " + diam4 + " mm\n        </div>\n    </div>    \n    ";
    msg.appendChild(element);
    //Amagem el formulari
    myFormWheels.style.display = "none";
}
//Mètode per mostrar i ocultar formularis 
function showForm() {
    myCarForm.style.display = "none";
    mytittle.style.display = "none";
    myFormWheels.style.display = "";
}
//Mètode per verificar el format de la matrícula
function validationCarFom(matricula) {
    var regex = /^\d{4}[a-zA-Z]{3}?$/;
    return regex.test(matricula) ? true : false;
}
