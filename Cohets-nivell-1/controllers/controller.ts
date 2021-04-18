//Defenim variable per guardar els objectes
let rocketsArray = new Array();

//Recollim els events dels botons
const ROCKETS3 = document.getElementById('power3') as HTMLButtonElement;
const ROCKETS6 = document.getElementById('power6') as HTMLButtonElement;

const ANIMATE3 = document.getElementById('anima3') as HTMLButtonElement;
const ANIMATE6 = document.getElementById('anima6') as HTMLButtonElement;

const SPEEDDOWN3 = document.getElementById('frena3') as HTMLButtonElement;
const SPEEDUP3   = document.getElementById('accelera3') as HTMLButtonElement;
const SPEEDDOWN6 = document.getElementById('frena6') as HTMLButtonElement;
const SPEEDUP6   = document.getElementById('accelera6') as HTMLButtonElement;

const INFO3 = document.getElementById('info3') as HTMLButtonElement;
const INFO6 = document.getElementById('info6') as HTMLButtonElement;
const INFO = document.getElementById('info') as HTMLButtonElement;

//Capturem els events del botons per crear els cohets
ROCKETS3?.addEventListener("click", (e: Event) => {
    const ROCKET = new SkyRocker('32WESSDS', [0,0,0]);
    //Deshabilitem el botó
    const MYUI = new UI();
    MYUI.disableBtn(ROCKETS3.id);
    //Mostrem les dades per pantalla
    MYUI.showRockets(ROCKET, "idRockets3", "bootsterRockets3", "totalpower3");
    rocketsArray.push(ROCKET);
    //Eliminem missatge si creem cohet per animar
    MYUI.onDelete("nocohets");
    MYUI.onDelete("noinfo");
});

ROCKETS6?.addEventListener("click", (e: Event) => { 
    const ROCKET = new SkyRocker('LDSFJA32', [0,0,0,0,0,0]);
    //Deshabilitem i hablitiem els botons
    const MYUI = new UI();
    MYUI.disableBtn(ROCKETS6.id);
    //Mostrem les dades per pantalla
    MYUI.showRockets(ROCKET, "idRockets6", "bootsterRockets6", "totalpower6");
    rocketsArray.push(ROCKET);
    //Eliminem missatge si creem cohet per animar
    MYUI.onDelete("nocohets");
    MYUI.onDelete("noinfo");
     
});
//mètode per mostrar els progress bars
ANIMATE3?.addEventListener("click", (e:Event) => {
    //Verifiquem el numero de motors per mostrar el progress bar
    const FINDMYROCKET = rocketsArray.find(element => element.booster.length == 3);
    const MYUI = new UI();
    MYUI.powerBarEnable(ANIMATE3.id, FINDMYROCKET, "power3__block" );
});

ANIMATE6?.addEventListener("click", (e:Event) => {
    //Verifiquem el numero de motors per mostrar el progress bar
    const FINDMYROCKET = rocketsArray.find(element => element.booster.length == 6);
    const MYUI = new UI();
    MYUI.powerBarEnable(ANIMATE3.id, FINDMYROCKET, "power6__block" );
});

//Mètodes i variables per animar els cohets
let incrementor3 = 12.5;
let decrementor3 = -12.5;
let total3= 0;
let incrementor6 = 20;
let decrementor6 = -20;
let total6 = 0;
SPEEDDOWN3?.addEventListener("click", (e: Event) => {
    const MYROCKET = rocketsArray.find(element => element.uid == '32WESSDS');
    const MYUI = new UI();
    MYUI.speeddown(MYROCKET);
    console.log("confirmar q reta =>", rocketsArray);
    MYUI.onChangeProgressBar("bar3", (total3+ decrementor3));
     if ( total3 <= 0 ) {
         return total3 = 0;
     } 
     else {
        return console.log("total", total3 += decrementor3);
     } 
});
SPEEDUP3?.addEventListener("click", (e:Event)=> {
    //Busquem id del cohet
    const MYROCKET = rocketsArray.find(element => element.uid == '32WESSDS');
    const MYUI = new UI();
    MYUI.speedup(MYROCKET);
    MYUI.onChangeProgressBar("bar3", (total3 + incrementor3));
    if( total3 >= 100) {
        return total3 = 100;
    }
    return total3 +=incrementor3;    
});

SPEEDDOWN6?.addEventListener("click", (e: Event) => {
    const MYROCKET = rocketsArray.find(element => element.uid == 'LDSFJA32');
    const MYUI = new UI();
    MYUI.speeddown(MYROCKET);
    MYUI.onChangeProgressBar("bar6", (total6+ decrementor6));
     if ( total6 <= 0 ) {
         return total6 = 0;
     } 
     else {
        return total6 += decrementor6;
     } 
});

SPEEDUP6?.addEventListener("click", (e:Event)=> {
    //Busquem id del cohet
    const MYROCKET = rocketsArray.find(element => element.uid == 'LDSFJA32');
    const MYUI = new UI();
    MYUI.speedup(MYROCKET);
    console.log("confirmar q suma =>", rocketsArray);
    MYUI.onChangeProgressBar("bar6", (total6 + incrementor6));
    if( total3 >= 100) {
        return total6 = 100;
    }
    return console.log(total6 +=incrementor6); 
});

//Mètodes per mostrar la informació dels cohets
INFO3?.addEventListener("click", (e:Event) => {
    //Busquem id del cohet
    const MYROCKET = rocketsArray.find(element => element.uid == '32WESSDS');
    const MYUI = new UI();
    MYUI.showRockets(MYROCKET, "idRockets3", "bootsterRockets3", "totalpower3" )
});

//Mètodes per mostrar la informació dels cohets
INFO6?.addEventListener("click", (e:Event) => {
    //Busquem id del cohet
    const MYROCKET = rocketsArray.find(element => element.uid == 'LDSFJA32');
    const MYUI = new UI();
    MYUI.showRockets(MYROCKET, "idRockets6", "bootsterRockets6", "totalpower6" )
});

INFO?.addEventListener("click", (e:Event) => {
    const MYUI = new UI();
    rocketsArray.forEach((element) => {
        MYUI.onShowAll(element);
        console.log(element);
    });
})