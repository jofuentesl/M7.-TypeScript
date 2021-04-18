"use strict";
//Defenim variable per guardar els objectes
var rocketsArray = new Array();
//Recollim els events dels botons
var ROCKETS3 = document.getElementById('power3');
var ROCKETS6 = document.getElementById('power6');
var ANIMATE3 = document.getElementById('anima3');
var ANIMATE6 = document.getElementById('anima6');
var SPEEDDOWN3 = document.getElementById('frena3');
var SPEEDUP3 = document.getElementById('accelera3');
var SPEEDDOWN6 = document.getElementById('frena6');
var SPEEDUP6 = document.getElementById('accelera6');
var INFO3 = document.getElementById('info3');
var INFO6 = document.getElementById('info6');
var INFO = document.getElementById('info');
//Capturem els events del botons per crear els cohets
ROCKETS3 === null || ROCKETS3 === void 0 ? void 0 : ROCKETS3.addEventListener("click", function (e) {
    var ROCKET = new SkyRocker('32WESSDS', [0, 0, 0]);
    //Deshabilitem el botó
    var MYUI = new UI();
    MYUI.disableBtn(ROCKETS3.id);
    //Mostrem les dades per pantalla
    MYUI.showRockets(ROCKET, "idRockets3", "bootsterRockets3", "totalpower3");
    rocketsArray.push(ROCKET);
    //Eliminem missatge si creem cohet per animar
    MYUI.onDelete("nocohets");
    MYUI.onDelete("noinfo");
});
ROCKETS6 === null || ROCKETS6 === void 0 ? void 0 : ROCKETS6.addEventListener("click", function (e) {
    var ROCKET = new SkyRocker('LDSFJA32', [0, 0, 0, 0, 0, 0]);
    //Deshabilitem i hablitiem els botons
    var MYUI = new UI();
    MYUI.disableBtn(ROCKETS6.id);
    //Mostrem les dades per pantalla
    MYUI.showRockets(ROCKET, "idRockets6", "bootsterRockets6", "totalpower6");
    rocketsArray.push(ROCKET);
    //Eliminem missatge si creem cohet per animar
    MYUI.onDelete("nocohets");
    MYUI.onDelete("noinfo");
});
//mètode per mostrar els progress bars
ANIMATE3 === null || ANIMATE3 === void 0 ? void 0 : ANIMATE3.addEventListener("click", function (e) {
    //Verifiquem el numero de motors per mostrar el progress bar
    var FINDMYROCKET = rocketsArray.find(function (element) { return element.booster.length == 3; });
    var MYUI = new UI();
    MYUI.powerBarEnable(ANIMATE3.id, FINDMYROCKET, "power3__block");
});
ANIMATE6 === null || ANIMATE6 === void 0 ? void 0 : ANIMATE6.addEventListener("click", function (e) {
    //Verifiquem el numero de motors per mostrar el progress bar
    var FINDMYROCKET = rocketsArray.find(function (element) { return element.booster.length == 6; });
    var MYUI = new UI();
    MYUI.powerBarEnable(ANIMATE3.id, FINDMYROCKET, "power6__block");
});
//Mètodes i variables per animar els cohets
var incrementor3 = 12.5;
var decrementor3 = -12.5;
var total3 = 0;
var incrementor6 = 20;
var decrementor6 = -20;
var total6 = 0;
SPEEDDOWN3 === null || SPEEDDOWN3 === void 0 ? void 0 : SPEEDDOWN3.addEventListener("click", function (e) {
    var MYROCKET = rocketsArray.find(function (element) { return element.uid == '32WESSDS'; });
    var MYUI = new UI();
    MYUI.speeddown(MYROCKET);
    console.log("confirmar q reta =>", rocketsArray);
    MYUI.onChangeProgressBar("bar3", (total3 + decrementor3));
    if (total3 <= 0) {
        return total3 = 0;
    }
    else {
        return console.log("total", total3 += decrementor3);
    }
});
SPEEDUP3 === null || SPEEDUP3 === void 0 ? void 0 : SPEEDUP3.addEventListener("click", function (e) {
    //Busquem id del cohet
    var MYROCKET = rocketsArray.find(function (element) { return element.uid == '32WESSDS'; });
    var MYUI = new UI();
    MYUI.speedup(MYROCKET);
    MYUI.onChangeProgressBar("bar3", (total3 + incrementor3));
    if (total3 >= 100) {
        return total3 = 100;
    }
    return total3 += incrementor3;
});
SPEEDDOWN6 === null || SPEEDDOWN6 === void 0 ? void 0 : SPEEDDOWN6.addEventListener("click", function (e) {
    var MYROCKET = rocketsArray.find(function (element) { return element.uid == 'LDSFJA32'; });
    var MYUI = new UI();
    MYUI.speeddown(MYROCKET);
    MYUI.onChangeProgressBar("bar6", (total6 + decrementor6));
    if (total6 <= 0) {
        return total6 = 0;
    }
    else {
        return total6 += decrementor6;
    }
});
SPEEDUP6 === null || SPEEDUP6 === void 0 ? void 0 : SPEEDUP6.addEventListener("click", function (e) {
    //Busquem id del cohet
    var MYROCKET = rocketsArray.find(function (element) { return element.uid == 'LDSFJA32'; });
    var MYUI = new UI();
    MYUI.speedup(MYROCKET);
    console.log("confirmar q suma =>", rocketsArray);
    MYUI.onChangeProgressBar("bar6", (total6 + incrementor6));
    if (total3 >= 100) {
        return total6 = 100;
    }
    return console.log(total6 += incrementor6);
});
//Mètodes per mostrar la informació dels cohets
INFO3 === null || INFO3 === void 0 ? void 0 : INFO3.addEventListener("click", function (e) {
    //Busquem id del cohet
    var MYROCKET = rocketsArray.find(function (element) { return element.uid == '32WESSDS'; });
    var MYUI = new UI();
    MYUI.showRockets(MYROCKET, "idRockets3", "bootsterRockets3", "totalpower3");
});
//Mètodes per mostrar la informació dels cohets
INFO6 === null || INFO6 === void 0 ? void 0 : INFO6.addEventListener("click", function (e) {
    //Busquem id del cohet
    var MYROCKET = rocketsArray.find(function (element) { return element.uid == 'LDSFJA32'; });
    var MYUI = new UI();
    MYUI.showRockets(MYROCKET, "idRockets6", "bootsterRockets6", "totalpower6");
});
INFO === null || INFO === void 0 ? void 0 : INFO.addEventListener("click", function (e) {
    var MYUI = new UI();
    rocketsArray.forEach(function (element) {
        MYUI.onShowAll(element);
        console.log(element);
    });
});
