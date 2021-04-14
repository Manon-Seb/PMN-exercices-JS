/* Manon SEBAOUN 
* Exercices 1 à 3 - cours algorithmie et JS avancé
*/

const scanf = require('scanf');

/* Ex1 : comparaison taille chaînes de caractères */

const compareSizeString = () => {
  console.log("Entrez une chaîne de caractères");
  let str1 = scanf('%s');
  console.log("Entrez une seconde chaîne de caractères");
  let str2 = scanf('%s');

  if (str1.length >= str2.length*2) {
    console.log( `"${str1}" est une chaîne de caractères deux fois plus longue que "${str2}"`);
  }
  else {
    console.log( `"${str1}" n'est pas une chaîne de caractères deux fois plus longue que "${str2}"`);
  }
}

/* Ex2 : calcul de la somme entre 1 et un entier saisi par l'utilisateur */

const sumOfNumbers = () => {
  let i = 1;
  let sum = 0;
  let nb = 0;

  /* Tant que la valeur entrée est inférieure à 1 ou n'est pas un nombre,
  on demande à l'utilsiateur d'entrer un nombre */
  while (nb < 1 || isNaN(nb)) {
    console.log("Entrez un entier (supérieur à 1)");
    nb = scanf('%d');
  }

  while (i <= nb) {
    sum = sum + i;
    i++;
  }

  console.log(`La somme des nombres de 1 à ${nb} est égale à ${sum}`);
}

/* Ex3 : afficher indice du plus grand élément dans le tableau
et la moyenne des éléments du tableau */

const biggestElementInArray = () => {
  let nbArray = [];

  while (nbArray.length < 5) {
    console.log("Entrez un entier");
    let nb = scanf('%d');

    // Si la valeur entrée n'est pas un nombre
    while(isNaN(nb)) {
      console.log("Veuillez entrer un nombre");
      nb = scanf('%d');
    }
    
    nbArray.push(nb);
  }

  // Indice du plus grand nombre du tableau
  let indice = nbArray.indexOf(Math.max(...nbArray));

  // Somme des nombres du tableau
  let total = nbArray.reduce((sum, val) => sum + val);

  // Calcul de la moyenne
  let mean = total/5;

  console.log(`L'indice du plus grand élément du tableau est ${indice}.
La moyenne des nombres du tableau est de ${total}/5=${mean}.`);
}