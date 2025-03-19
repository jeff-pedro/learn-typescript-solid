interface Licenca {
    calculaTaxa(): void;
}

class LicencaPessoal implements Licenca {
    calculaTaxa(): void {
        console.log(`A lincensa pessoal custará R$ 10.00`);
    }
}

class LicencaComercial implements Licenca {
    usuarios: number;

    constructor(qtdUsuarios: number) {
        this.usuarios = qtdUsuarios;
    }

    calculaTaxa(): void {
        console.log(`As lincenças comercial custarão R$ ${(this.usuarios * 10).toFixed(2)}`);
    }
}

// Sistema de Cobrança
function fazerCobranca(licenca: Licenca) {
    return licenca.calculaTaxa();
}

const licencaPessoal = new LicencaPessoal()
const licencaComercial = new LicencaComercial(5);

// Ambos podem ser usuados onde uma Licenca é esperada.
fazerCobranca(licencaPessoal);
fazerCobranca(licencaComercial);

// Outra aplicação
const licencas: Licenca[] = [
    new LicencaPessoal(),
    new LicencaComercial(5)
];

// Iterando sem se preocuar com o tipo específico
licencas.forEach((licenca) => {
    fazerCobranca(licenca)
});

/* Seguimos aqui a LSP porque:

    - As interfaces são contratos sólidos
    - As implementações são intercambiáveis
    - O código cliente (fazerCobranca) permanece estável
    - Não há comportamentos inesperados na substituição
*/
