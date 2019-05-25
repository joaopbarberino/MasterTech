const aleatorio = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const jogadaCerta = function (numObjetivo, jogada) {
    if (numObjetivo == jogada) {
        return true;
    }
    else {
        return false;
    }
}

const maiorOuMenor = function (numObjetivo, jogada) {
    if (jogada < numObjetivo)
        return 'maior';
    if (jogada > numObjetivo)
        return 'menor';
}

const jogarDeNovo = function () {
    let resposta = '';
    resposta = prompt('Deseja jogar de novo? Responda com: "S" ou "N"');
    if (resposta == 'S') {
        return true;
    }
    else {
        alert('Obrigado por jogar!');
        return false;
    }
}

let gameLoop = true, numObjetivo = aleatorio(0, 50), replay = true, jogada = '', vidas = 10;

while (gameLoop == true) {

    while (jogada == '' || isNaN(jogada)) {
        jogada = Number(prompt('Escolha um número entre 0 e 50.'));
    }


    if (jogadaCerta(numObjetivo, jogada) == false) {
        vidas--;
        alert('Que pena! Você errou! O número certo é ' + maiorOuMenor(numObjetivo, jogada) + ' do que o que você disse!' + vidas + ' tentativas restantes!');
        jogada = '';
    } else if (jogadaCerta(numObjetivo, jogada) == true) {
        alert('Parabéns! Você acertou! Aperte F5 para jogar novamente');
        gameLoop = false;

    }
    
    if (vidas === 0) {
        alert('Você perdeu! Aperte F5 para jogar novamente.')
        gameLoop = false;
    } 
}
