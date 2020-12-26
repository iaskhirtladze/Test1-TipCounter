
let totalTip = document.getElementById('calculate');


let button = document.getElementById('btn');
console.log(button ,"rame");

function calculateTip(){
    let billString = document.getElementById("bill").value;
   let  tipString= document.getElementById("tip").value;
   let  personsString = document.getElementById("persons").value;
 //turn strings into numbers
    let bill = parseFloat(billString);
    let tipPersentage = parseFloat(tipString);
    let persons = parseFloat(personsString);
    console.log(billString,  bill);

    let output  = (((bill * tipPersentage)/100)/persons);
    totalTip.innerHTML = output;
}

button.onclick=calculateTip;



