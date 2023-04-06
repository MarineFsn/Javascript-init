let sign = prompt("How old are you?");
let age = parseInt(sign);
//parseInt(sign) Défini l'age dans "let age en fonction de ce que la personne écrit dans la boite de dialogue//

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not yet an adult");
}