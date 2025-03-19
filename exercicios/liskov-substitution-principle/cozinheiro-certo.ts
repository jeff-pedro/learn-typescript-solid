class CozinheiroPai {
    fazerLanche(): string {
        return 'X-Burguer simples';
    }
}

class CozinheiroFilha extends CozinheiroPai {
    fazerLanche(): string {
        return super.fazerLanche() + ' com ovo, rafrango, bacon e picles'
    }

    fazerSuco(): string {
        return 'Preparando um suco bem refrescamte';
    }
}

const cozinheiroPai = new CozinheiroPai();
console.log(cozinheiroPai.fazerLanche());

const cozinheiroFilha = new CozinheiroFilha();
console.log(cozinheiroFilha.fazerLanche());
