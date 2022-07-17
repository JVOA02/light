//const turnOn = document.getElementById ('turnOn');
//const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById('lamp');
const turnOff_turnOn = document.getElementById ('turnOff_turnOn');

let num = 0;


function isbroken(){
return lamp.src.indexOf ( 'broken' ) > -1
}
function lampbroken(){
    lamp .src = './img/broken.png';
 
}


function lampOn (){
if(!isbroken ()){
    lamp .src = './IMG/on.png';
}
}
function lampOff(){

    if(!isbroken () ){
    lamp .src = './IMG/off.png';
    }

}

function turnOn_turnOff(){
if (turnOff_turnOn.textContent == 'LIGAR'){
    lampOn();
    turnOff_turnOn.textContent = 'DESLIGAR';
}
else if (turnOff_turnOn.textContent == 'DESLIGAR'){
    lampOff();
    turnOff_turnOn.textContent = 'LIGAR';
}

}


turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener('dblclick', lampbroken);
lamp.addEventListener('dblclick', isbroken);
turnOff_turnOn.addEventListener('click', turnOn_turnOff)
