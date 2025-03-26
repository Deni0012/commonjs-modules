//All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto
const names = require('./names.js');
const hobbies = require('./hobbies.js');


//Crea una funzione che non ha parametri
function people(){
    return {
        //La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies
        fullName: names('Denise', 'Di Genni'),
        hobbies: hobbies('nuotare', 'leggere', 'giocare')
 }
}

console.log(people());