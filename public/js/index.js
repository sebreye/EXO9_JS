let chiffre =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ]

for (let i = 0; i < 11; i++) {
    console.log(i);
}
let i = 10;

while (i > 0) {
    console.log(i);
    i--;
}

let chiffre2 = 2; 

do {
    console.log(chiffre2); 
    chiffre2 += 2;
} while (chiffre2 <= 20); 

let mots = ["un", "deux", "trois"]; 

for (const mot of mots) {
    console.log (mot); 
}
let chiffre3 = 0; 

for (let i = 1; i <= 10; i++) {
    chiffre3 += i;
}
console.log(chiffre3); 

let nbr = 0; // définissez une variable num à 0

while (nbr <= 0) { 
    nbr = prompt("Saisissez un nombre positif:"); 
}

alert(`Vous avez entré un nombre positif ${nbr}`); 

for (let i = 1; i <= 10; i++) {
    console.log(i); 
    if (i === 5) { 
    break; 
    }
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { 
    continue; 
    }
    console.log(i); 
}
