let spaceship = prompt("Digite o nome da nave: ");

let charToReplace = prompt("Digite o caractere que deseja substituir: ");

let replacementToChar = prompt("Por qual caractere que deseja substituir: ");

let newSpaceship = "";

for(let pos = 0; pos < spaceship.length; pos++){
    if(spaceship[pos] == charToReplace){
        newSpaceship += replacementToChar;
    } else {
        newSpaceship += spaceship[pos];
    }
}

alert('O novo nome da nave é: ' + newSpaceship);