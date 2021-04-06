//Realitzem instancia de l'ojecte car i wheel
let car:Car;

//Recuperem els formularis
const myCarForm     = document.getElementById('carForm') as HTMLFormElement; 
const myFormWheels  = document.getElementById('formWheels') as HTMLFormElement; 

//Recuperem el titol
const mytittle = document.getElementById('maintitle') as HTMLElement;


myCarForm.addEventListener('submit', (event) => {event.preventDefault();submitForm()});
  
function submitForm() {

    //Definim variable pel contador
    let cont: number = 0;

    //Recollim les dades del formulari
    const matricula = (<HTMLInputElement>document.querySelector('#matricula'));
    const marca     = (<HTMLInputElement>document.querySelector('#marca'));
    const color     = (<HTMLInputElement>document.querySelector('#color'));

    if(!validationCarFom(matricula.value)) {
        cont++;
    }
    if(!marca.value) {
        cont++
    }
    if (!color.value) {
        cont++
    }
    if (cont > 0) {
        return false;
    } else {
        
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

myFormWheels.addEventListener('submit', (event) => {event.preventDefault();createrWheels()});


function createrWheels () {

    //Definim variable pel contador
    let cont: number = 0;

    const wheel1 = (<HTMLInputElement>document.querySelector('#marca1'));
    const diam1  = (<HTMLInputElement>document.querySelector('#diametre1'));

    const wheel2 = (<HTMLInputElement>document.querySelector('#marca2'));
    const diam2  = (<HTMLInputElement>document.querySelector('#diametre2'));

    const wheel3 = (<HTMLInputElement>document.querySelector('#marca3'));
    const diam3  = (<HTMLInputElement>document.querySelector('#diametre3'));

    const wheel4 = (<HTMLInputElement>document.querySelector('#marca4'));
    const diam4  = (<HTMLInputElement>document.querySelector('#diametre4'));
    
    if(!wheel1.value || !wheel2.value || !wheel3.value || !wheel4.value || !diam1 || !diam2 || !diam3 || !diam4) {
        cont++
    } 
    if (cont >0 ) {
        return false;
    } else {
        addWheelCar(wheel1.value, diam1.value, 
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


//Mètode per afegir rodes al vehicle
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
