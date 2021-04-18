"use strict";
//Definim la classe per crear cohets
var SkyRocker = /** @class */ (function () {
    function SkyRocker(uid, bootser) {
        this.uid = uid;
        this.booster = bootser;
    }
    return SkyRocker;
}());
var UI = /** @class */ (function () {
    function UI() {
    }
    //Mètode per mostrar la barra de progres
    UI.prototype.powerBarEnable = function (id, numBooster, idPower) {
        var btn = document.getElementById(id);
        var POWERBAR = document.getElementById(idPower);
        var NOCOHETS = document.getElementById("nocohets");
        if (numBooster) {
            POWERBAR.style.display = "flex";
            this.onDelete("nocohets");
        }
        else {
            NOCOHETS.innerHTML = "<p class='alert alert-danger mt-3' role='alert'>No hi han cohets creats amb aquesta potència</p>";
        }
    };
    //Mètode per esborrar html
    UI.prototype.onDelete = function (id) {
        var NOCOHETS = document.getElementById(id);
        NOCOHETS.innerHTML = "";
    };
    //Mètode per desactivar botons  
    UI.prototype.disableBtn = function (id) {
        var btn = document.getElementById(id);
        btn.classList.add("disabled");
    };
    //Mètode per mostrar les progress bar
    UI.prototype.showProgress = function (id) {
        var POWERBAR = document.getElementById(id);
        POWERBAR.style.display = "flex";
    };
    //Mètode per mostrar els cohets
    UI.prototype.showRockets = function (rockets, id, idmotor, idpower) {
        //Recuperem id per mostrar informació
        var SHOW = document.getElementById(id);
        var SHOWMOTORS = document.getElementById(idmotor);
        var SHOWPOWER = document.getElementById(idpower);
        var NOINFO = document.getElementById("noinfo");
        if (rockets) {
            //Calculem potència màxima motors
            var POWER = rockets.booster.reduce(function (a, b) { return a + b; }, 0);
            //Mostrem la info dels cohets
            SHOW.innerHTML = "Id rocket: " + rockets.uid;
            SHOWMOTORS.innerHTML = "Number of power units: " + rockets.booster.length;
            SHOWPOWER.innerHTML = "Current power: " + POWER;
        }
        else {
            NOINFO.innerHTML = "<p class='alert alert-danger mt-3' role='alert'>No hi han cohets creats amb aquesta potència</p>";
        }
    };
    //Métode per accelerar els choets
    UI.prototype.speedup = function (rocket) {
        if (rocket.booster.length == 3 && rocket.booster[0] == 0) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 10;
            rocket.booster[2] = 10;
            console.log("test count", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 10 && rocket.booster[2] == 10) {
            rocket.booster[1] = 20;
            rocket.booster[2] = 20;
            console.log("test count2", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 20 && rocket.booster[2] == 20) {
            rocket.booster[1] = 30;
            rocket.booster[2] = 30;
            console.log("test count2", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 30) {
            rocket.booster[2] = 40;
            console.log("test count40", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 40) {
            rocket.booster[2] = 50;
            console.log("test count50", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 50) {
            rocket.booster[2] = 60;
            console.log("test count60", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 60) {
            rocket.booster[2] = 70;
            console.log("test count70", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 70) {
            rocket.booster[2] = 80;
            console.log("test count80", rocket);
            return false;
        }
        if (rocket.booster.length == 6
            && rocket.booster[0] == 0
            && rocket.booster[1] == 0
            && rocket.booster[2] == 0
            && rocket.booster[3] == 0
            && rocket.booster[4] == 0
            && rocket.booster[5] == 0) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 10;
            rocket.booster[2] = 10;
            rocket.booster[3] = 10;
            rocket.booster[4] = 10;
            rocket.booster[5] = 10;
            console.log("test count0_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6
            && rocket.booster[0] == 10
            && rocket.booster[1] == 10
            && rocket.booster[2] == 10
            && rocket.booster[3] == 10
            && rocket.booster[4] == 10
            && rocket.booster[5] == 10) {
            rocket.booster[0] = 20;
            rocket.booster[1] = 20;
            rocket.booster[2] = 20;
            rocket.booster[3] = 20;
            rocket.booster[4] = 20;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6
            && rocket.booster[0] == 20
            && rocket.booster[1] == 20
            && rocket.booster[2] == 20
            && rocket.booster[3] == 20
            && rocket.booster[4] == 20
            && rocket.booster[5] == 10) {
            rocket.booster[0] = 30;
            rocket.booster[1] = 30;
            rocket.booster[2] = 30;
            rocket.booster[3] = 30;
            rocket.booster[4] = 30;
            console.log("test count2_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6
            && rocket.booster[0] == 30
            && rocket.booster[1] == 30
            && rocket.booster[2] == 30
            && rocket.booster[3] == 30
            && rocket.booster[4] == 30
            && rocket.booster[5] == 10) {
            rocket.booster[1] = 40;
            rocket.booster[2] = 40;
            rocket.booster[3] = 40;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6
            && rocket.booster[0] == 30
            && rocket.booster[1] == 40
            && rocket.booster[2] == 40
            && rocket.booster[3] == 40
            && rocket.booster[4] == 20
            && rocket.booster[5] == 10) {
            rocket.booster[2] = 50;
            rocket.booster[3] = 50;
            console.log("test count1_6", rocket);
            return false;
        }
        else {
            console.log("test suma", rocket);
        }
    };
    //Métode per accelerar els choets
    UI.prototype.speeddown = function (rocket) {
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 80) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 70;
            console.log("test count-1", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 70) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 60;
            console.log("test count-2", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 60) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 50;
            console.log("test count-2", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 50) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 40;
            console.log("test count-40", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 40) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 30;
            console.log("test count-50", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 30 && rocket.booster[2] == 30) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 20;
            rocket.booster[2] = 20;
            console.log("test count60", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 20 && rocket.booster[2] == 20) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 10;
            rocket.booster[2] = 10;
            console.log("test count70", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0] == 10 && rocket.booster[1] == 10 && rocket.booster[2] == 10) {
            rocket.booster[0] = 0;
            rocket.booster[1] = 0;
            rocket.booster[2] = 0;
            console.log("test count80", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[5] == 10) {
            rocket.booster[0] = 20;
            rocket.booster[1] = 30;
            rocket.booster[2] = 40;
            rocket.booster[3] = 40;
            rocket.booster[4] = 30;
            rocket.booster[5] = 0;
            console.log("test count0_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[0] == 20) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 20;
            rocket.booster[2] = 30;
            rocket.booster[3] = 30;
            rocket.booster[4] = 20;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[0] == 10) {
            rocket.booster[0] = 0;
            rocket.booster[1] = 10;
            rocket.booster[2] = 20;
            rocket.booster[3] = 20;
            rocket.booster[4] = 10;
            console.log("test count2_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[1] == 10) {
            rocket.booster[1] = 0;
            rocket.booster[2] = 10;
            rocket.booster[3] = 10;
            rocket.booster[4] = 0;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[2] == 10) {
            rocket.booster[2] = 0;
            rocket.booster[3] = 0;
            console.log("test count1_6", rocket);
            return false;
        }
        else {
            console.log("test suma", rocket);
        }
    };
    //Mètode per modificar progressBar
    UI.prototype.onChangeProgressBar = function (id, incre) {
        var elem = document.getElementById(id);
        elem.style.width = incre + "%";
    };
    //Mètode per mostra tota la informació
    UI.prototype.onShowRocket = function (id, rocker) {
        var btn = document.getElementById(id);
        //const POWERBAR = document.getElementById(idPower) as HTMLMetaElement;
        var NOINFO = document.getElementById("noinfo");
        if (rocker) {
            this.onDelete("noinfo");
            console.log(rocker);
        }
        else {
            NOINFO.innerHTML = "<p class='alert alert-danger mt-3' role='alert'>No hi han cohets creats amb aquesta potència</p>";
        }
    };
    UI.prototype.onShowAll = function (rocket) {
        var INF = document.getElementById("show");
        if (rocket) {
            var POWER = rocket.booster.reduce(function (a, b) { return a + b; }, 0);
            INF.innerHTML = "\n            <div class='alert alert-success mt-3' role='alert'>\n            <h4>Cohets creats</h4>\n            <p>Matr\u00EDcula del cohet: " + rocket.uid + " </p\n            <p>N\u00FAmero de motors del cohet: " + rocket.booster.length + " </p>\n            <p>Potencia del cohet: " + POWER + " </p>\n            </div>\n            ";
        }
    };
    return UI;
}());
