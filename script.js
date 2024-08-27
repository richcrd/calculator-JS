// DOM
const display = document.getElementById("display");

function MostrarDisplay(input){
    display.value += input;
}

function LimpiarDisplay(){
    display.value = "";
}

function Calcular(){
    try{
        display.value = eval(display.value);
        console.log(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}