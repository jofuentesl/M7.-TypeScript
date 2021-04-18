//Definim la classe per crear cohets
class SkyRocker {
    uid: string;
    booster:number[];
  
    constructor(    uid: string,
                    bootser:number[] ) {

        this.uid = uid;
        this.booster = bootser;
    } 
}

class UI {
    //Mètode per mostrar la barra de progres
    powerBarEnable(id:string, numBooster:boolean, idPower:string) {
        const btn = <HTMLButtonElement>document.getElementById(id);
        const POWERBAR = document.getElementById(idPower) as HTMLMetaElement;
        const NOCOHETS = document.getElementById("nocohets");
        if(numBooster) {
            POWERBAR.style.display = "flex";
            this.onDelete("nocohets");
        } else {
            NOCOHETS.innerHTML="<p class='alert alert-danger mt-3' role='alert'>No hi han cohets creats amb aquesta potència</p>"
        }
    }

    //Mètode per esborrar html
    onDelete(id:string) {
        const NOCOHETS = document.getElementById(id);
        NOCOHETS.innerHTML = "";
    }

    //Mètode per desactivar botons  
    disableBtn(id: string) {
        const btn = document.getElementById(id);
        btn.classList.add("disabled");  
    }

    //Mètode per mostrar les progress bar
    showProgress(id:string) {
        const POWERBAR = document.getElementById(id) as HTMLMetaElement;
        POWERBAR.style.display = "flex";
    }

    //Mètode per mostrar els cohets
    showRockets(rockets:SkyRocker, id:string, idmotor:string, idpower:string) {


        //Recuperem id per mostrar informació
        const SHOW = document.getElementById(id);
        const SHOWMOTORS = document.getElementById(idmotor);      
        const SHOWPOWER = document.getElementById(idpower);
        const NOINFO = document.getElementById("noinfo");

        if(rockets) {
            
            //Calculem potència màxima motors
            const POWER = rockets.booster.reduce((a, b) => a + b, 0);
            
            //Mostrem la info dels cohets
            SHOW.innerHTML ="Id rocket: " + rockets.uid;
            SHOWMOTORS.innerHTML = "Number of power units: " + rockets.booster.length;
            SHOWPOWER.innerHTML = "Current power: " + POWER;
        } else {

            NOINFO.innerHTML="<p class='alert alert-danger mt-3' role='alert'>No hi han cohets creats amb aquesta potència</p>"
        }
    }
    //Métode per accelerar els choets
    speedup(rocket: SkyRocker) {
        if(rocket.booster.length == 3 && rocket.booster[0]==0) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 10;
            rocket.booster[2] = 10;
            console.log("test count", rocket);
            return false;
        } 
        if(rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==10 && rocket.booster[2]==10) {
            rocket.booster[1] = 20;
            rocket.booster[2] = 20;
            console.log("test count2", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==20 && rocket.booster[2]==20) {
            rocket.booster[1] = 30;
            rocket.booster[2] = 30;
            console.log("test count2", rocket);
            return false;
        } 
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==30) {
            rocket.booster[2] = 40;
            console.log("test count40", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==40) {
            rocket.booster[2] = 50;
            console.log("test count50", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==50) {
            rocket.booster[2] = 60;
            console.log("test count60", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==60) {
            rocket.booster[2] = 70;
            console.log("test count70", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==70) {
            rocket.booster[2] = 80;
            console.log("test count80", rocket);
            return false;
        }
        if (rocket.booster.length == 6 
            && rocket.booster[0]==0
            && rocket.booster[1]==0
            && rocket.booster[2]==0
            && rocket.booster[3]==0
            && rocket.booster[4]==0
            && rocket.booster[5]==0) {
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
            && rocket.booster[0]== 10
            && rocket.booster[1]== 10
            && rocket.booster[2]== 10
            && rocket.booster[3]== 10
            && rocket.booster[4]== 10
            && rocket.booster[5]== 10) {
            rocket.booster[0] = 20;
            rocket.booster[1] = 20;
            rocket.booster[2] = 20;
            rocket.booster[3] = 20;
            rocket.booster[4] = 20;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 
            && rocket.booster[0]== 20
            && rocket.booster[1]== 20
            && rocket.booster[2]== 20
            && rocket.booster[3]== 20
            && rocket.booster[4]== 20
            && rocket.booster[5]== 10) {
            rocket.booster[0] = 30;
            rocket.booster[1] = 30;
            rocket.booster[2] = 30;
            rocket.booster[3] = 30;
            rocket.booster[4] = 30;
            console.log("test count2_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 
            && rocket.booster[0]== 30
            && rocket.booster[1]== 30
            && rocket.booster[2]== 30
            && rocket.booster[3]== 30
            && rocket.booster[4]== 30
            && rocket.booster[5]== 10) {
            rocket.booster[1] = 40;
            rocket.booster[2] = 40;
            rocket.booster[3] = 40;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 
            && rocket.booster[0]== 30
            && rocket.booster[1]== 40
            && rocket.booster[2]== 40
            && rocket.booster[3]== 40
            && rocket.booster[4]== 20
            && rocket.booster[5]== 10) {
            rocket.booster[2] = 50;
            rocket.booster[3] = 50;
            console.log("test count1_6", rocket);
            return false;
        }
        else {
            console.log("test suma", rocket);
        }
    }

     //Métode per accelerar els choets
     speeddown(rocket: SkyRocker) {
        if(rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==80) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 70;
            console.log("test count-1", rocket);
            return false;
        } 
        if(rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==70) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 60;
            console.log("test count-2", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==60) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 50;
            console.log("test count-2", rocket);
            return false;
        } 
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==50) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 40;
            console.log("test count-40", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==40) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 30;
            rocket.booster[2] = 30;
            console.log("test count-50", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==30 && rocket.booster[2]==30) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 20;
            rocket.booster[2] = 20;
            console.log("test count60", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==20 && rocket.booster[2]==20) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 10;
            rocket.booster[2] = 10;
            console.log("test count70", rocket);
            return false;
        }
        if (rocket.booster.length == 3 && rocket.booster[0]==10 && rocket.booster[1]==10 && rocket.booster[2]==10) {
            rocket.booster[0] = 0;
            rocket.booster[1] = 0;
            rocket.booster[2] = 0;
            console.log("test count80", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[5]==10) {
            rocket.booster[0] = 20;
            rocket.booster[1] = 30;
            rocket.booster[2] = 40;
            rocket.booster[3] = 40;
            rocket.booster[4] = 30;
            rocket.booster[5] = 0;
            console.log("test count0_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[0]==20) {
            rocket.booster[0] = 10;
            rocket.booster[1] = 20;
            rocket.booster[2] = 30;
            rocket.booster[3] = 30;
            rocket.booster[4] = 20;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[0]==10) {
            rocket.booster[0] = 0;
            rocket.booster[1] = 10;
            rocket.booster[2] = 20;
            rocket.booster[3] = 20;
            rocket.booster[4] = 10;
            console.log("test count2_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[1]==10) {
            rocket.booster[1] = 0;
            rocket.booster[2] = 10;
            rocket.booster[3] = 10;
            rocket.booster[4] = 0;
            console.log("test count1_6", rocket);
            return false;
        }
        if (rocket.booster.length == 6 && rocket.booster[2]==10) {
            rocket.booster[2] = 0;
            rocket.booster[3] = 0;
            console.log("test count1_6", rocket);
            return false;
        }
        else {
            console.log("test suma", rocket);
        }
    }    

    //Mètode per modificar progressBar
    onChangeProgressBar( id: string, incre: number) {
        let elem = document.getElementById(id);
            elem.style.width =  incre + "%";  
    }

    //Mètode per mostra tota la informació
    onShowRocket(id:string, rocker:SkyRocker) {
        const btn = <HTMLButtonElement>document.getElementById(id);
        //const POWERBAR = document.getElementById(idPower) as HTMLMetaElement;
        const NOINFO = document.getElementById("noinfo");
        if(rocker) {      
            this.onDelete("noinfo");
            console.log(rocker);
        } else {
            NOINFO.innerHTML="<p class='alert alert-danger mt-3' role='alert'>No hi han cohets creats amb aquesta potència</p>"
        }
    }

    onShowAll( rocket: SkyRocker) {
        const INF = document.getElementById("show");
        if(rocket) {
            const POWER = rocket.booster.reduce((a, b) => a + b, 0);
            INF.innerHTML=`
            <div class='alert alert-success mt-3' role='alert'>
            <h4>Cohets creats</h4>
            <p>Matrícula del cohet: ${rocket.uid} </p
            <p>Número de motors del cohet: ${rocket.booster.length} </p>
            <p>Potencia del cohet: ${POWER} </p>
            </div>
            `
        }
                
    }
}


