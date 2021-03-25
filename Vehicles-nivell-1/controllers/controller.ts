//Realitzem instancia de l'ojecte car i wheel
let car:Car;

//Recuperem els formularis
const myCarForm     = document.getElementById('carForm') as HTMLFormElement; 
const myFormWheels  = document.getElementById('formWheels') as HTMLFormElement; 

//Recuperem el titol
const mytittle = document.getElementById('maintitle') as HTMLElement;

function createCar() {

    //Definim variable pel contador
    let cont: number = 0;

    //Recollim valors formulari per crear el cotxe
    const matricula = (<HTMLInputElement>document.querySelector('#matricula'));
    const marca     = (<HTMLInputElement>document.querySelector('#marca'));
    const color     = (<HTMLInputElement>document.querySelector('#color'));

    //Recollim classes per mostrar errada
    const matError = document.getElementById('resMatricula') as HTMLElement;
    const marError = document.getElementById('resMarca') as HTMLElement;
    const colError = document.getElementById('resColor') as HTMLElement;
   
    if(!validationCarFom(matricula.value)) {
    
        matricula.classList.add("errorInput");

        matError.innerHTML = `<p class="errText">El format no és correcte </p>`
        
        cont++;

    } if (marca.value.length <= 0) {

        marca.classList.add("errorInput");
        marError.innerHTML = `<p class="errText">Camp obligatori</p>`
        cont++;

    } if (color.value.length <= 0) {

        color.classList.add("errorInput");
        colError.innerHTML = `<p class="errText">Camp obligatori</p>`
        cont++;

    } if (cont > 0) {

        return false;

    } else {
     
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

//Mètode per afegir rodes al vehicle
function addWheels() {

    let cont:number = 0;

    const wheel1 = (<HTMLInputElement>document.querySelector('#marca1'));
    const diam1  = (<HTMLInputElement>document.querySelector('#diametre1'));

    const wheel2 = (<HTMLInputElement>document.querySelector('#marca2'));
    const diam2  = (<HTMLInputElement>document.querySelector('#diametre2'));

    const wheel3 = (<HTMLInputElement>document.querySelector('#marca3'));
    const diam3  = (<HTMLInputElement>document.querySelector('#diametre3'));

    const wheel4 = (<HTMLInputElement>document.querySelector('#marca4'));
    const diam4  = (<HTMLInputElement>document.querySelector('#diametre4'));

    //Recollim classes per mostrar errada
    const matErr1 = document.getElementById('resMar1') as HTMLElement;
    const matErr2 = document.getElementById('resMar2') as HTMLElement;
    const matErr3 = document.getElementById('resMar3') as HTMLElement;
    const matErr4 = document.getElementById('resMar4') as HTMLElement;
    const diaErr1 = document.getElementById('resDia1') as HTMLElement;
    const diaErr2 = document.getElementById('resDia2') as HTMLElement;
    const diaErr3 = document.getElementById('resDia3') as HTMLElement;
    const diaErr4 = document.getElementById('resDia4') as HTMLElement;
    console.log(wheel1.value);
    console.log(  typeof(parseInt(diam1.value)));

    if(wheel1.value.length <= 0) {

        wheel1.classList.add("errorInput");
        matErr1.innerHTML = `<p class="errText">Aquest camp es obligatori </p>`
        
        cont++;
    }
    if(wheel2.value.length <= 0) {

        wheel2.classList.add("errorInput");
        matErr2.innerHTML = `<p class="errText">Aquest camp es obligatori </p>`
        cont++;
    }
    if(wheel3.value.length <= 0) {

        wheel3.classList.add("errorInput");
        matErr3.innerHTML = `<p class="errText">Aquest camp es obligatori </p>`
        cont++;
    }
    if(wheel4.value.length <= 0) {

        wheel4.classList.add("errorInput");
        matErr4.innerHTML = `<p class="errText">Aquest camp es obligatori </p>`
        cont++;
    
    }
    if( diam1.value < "0.2" || diam1.value > "4" || diam1.value.length == 0) {
        diam1.classList.add("errorInput");
        diaErr1.innerHTML = `<p class="errText">El valor ha d'estar entre 0.2 i 4mm </p>`
        cont++;
    }
    if( diam2.value < "0.2" || diam2.value > "4" || diam2.value.length == 0) {

        diam2.classList.add("errorInput");
        diaErr2.innerHTML = `<p class="errText">El valor ha d'estar entre 0.2 i 4mm </p>`
        cont++;
    }
    if( diam3.value < "0.2" || diam3.value > "4" || diam3.value.length == 0) {

        diam3.classList.add("errorInput");
        diaErr3.innerHTML = `<p class="errText">El valor ha d'estar entre 0.2 i 4mm </p>`
        cont++;
    }
    if( diam4.value < "0.2" || diam4.value > "4" || diam4.value.length == 0) {

        diam4.classList.add("errorInput");
        diaErr4.innerHTML = `<p class="errText">El valor ha d'estar entre 0.2 i 4mm </p>`
        cont++;
    }
    
    if (cont > 0) {
        
        return false;

    } else {

        addWheelCar(    wheel1.value, diam1.value, 
                        wheel2.value, diam2.value, 
                        wheel3.value, diam3.value,
                        wheel4.value, diam4.value );
        return true;
    }
    
}

//Mètode per crear element
function createElement(matricula: string,  color: string, marca: string,) {
    
    //Recollim id per mostrar el cotxer creat
    const msg =document.getElementById('resp') as HTMLElement;
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="car-header">
            <h4 class="bg-success">Dades del meu cotxe</h4>
        </div>
        <div class="card-body" id="carInfo">
            <strong><h2><i class="fas fa-car"></i></h2></strong>
                <strong>Matricula</strong>: ${matricula} |
                <strong>Marca</strong>: ${marca} |
                <strong>Color</strong>: ${color}
            </div>
        </div>`;

        msg.appendChild(element);
}

function addWheelCar(   wheel1:string, diam1:string, 
                        wheel2:string, diam2:string, 
                        wheel3:string, diam3:string,
                        wheel4:string, diam4:string ) {
    //Recuperem id per mostrar missatgeconst 
    const msg = (<HTMLInputElement>document.getElementById('carInfo'));

            
    const element = document.createElement('div');
    
    //Mostrem les dades per pantalla
    element.innerHTML = `
    </hr>
    <h5 class="m-3">Informació sobre les rodes:</h5>
    <div class="d-flex justify-content-between"> 
        <div>   
        <strong>Marca roda 1</strong>: ${wheel1} 
        <strong>Diametre roda 1</strong>: ${diam1} mm
        </div>
        <div>   
        <strong>Marca roda 2</strong>: ${wheel2}  
        <strong>Diametre roda 2</strong>: ${diam2} mm
        </div>
        <div>   
        <strong>Marca roda 3</strong>: ${wheel3} 
        <strong>Diametre roda 3</strong>: ${diam3} mm
        </div>
        <div>   
        <strong>Marca roda 4</strong>: ${wheel4} 
        <strong>Diametre roda 4</strong>: ${diam4} mm
        </div>
    </div>    
    `

    msg.appendChild(element);

    //Amagem el formulari
    myFormWheels.style.display="none";
}

//Mètode per mostrar i ocultar formularis 
function showForm() {

    myCarForm.style.display = "none";
    mytittle.style.display = "none";
    myFormWheels.style.display=""
}

//Mètode per verificar el format de la matrícula
function validationCarFom(matricula: string) {
    let regex = /^\d{4}[a-zA-Z]{3}?$/;
    return regex.test(matricula) ? true : false;
}
