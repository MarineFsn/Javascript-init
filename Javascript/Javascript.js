let n = parseInt(prompt("Entrez un nombre : "));
let sum = 0;

for (let i = 0; i < n; i++) {
  let number = parseInt(prompt("Entrez un nombre : "));
  sum += number;
}

console.log("La somme est : " + sum);


//Explication :
//
//   Le programme commence par demander à l'utilisateur d'entrer un nombre n à l'aide de la méthode prompt() et le stocke dans une variable appelée n.
//    Il initialise une variable sum à 0.
//    Il utilise ensuite une boucle for pour demander à l'utilisateur n fois de saisir un nouveau nombre, et à chaque fois il stocke le nouveau nombre dans une variable appelée number et l'ajoute à la sum.
//    Après la boucle, le programme affiche la somme de tous les nombres collectés à l'aide de la méthode console.log().
//
//Par exemple, si l'utilisateur saisit 3 pour n puis saisit 1, 2 et 3, le programme affichera "La somme est : 6" dans la console.
