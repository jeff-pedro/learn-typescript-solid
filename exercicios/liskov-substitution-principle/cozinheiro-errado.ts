class Cozinheiro2Pai {
    fazerLanche(): string {
        return 'X-Burguer simples';
    }
}

class Cozinheiro2Filha {
    fazerLanche(): string {
        throw new Error('Não sei fazer lanches');
    }

    fazerSuco(): string {
        return 'Preparando um suco bem refrescamte';
    }
}

const cozinheiro2Pai = new Cozinheiro2Pai();
console.log(cozinheiro2Pai.fazerLanche());

const cozinheiro2Filha = new Cozinheiro2Filha();
console.log(cozinheiro2Filha.fazerLanche());
