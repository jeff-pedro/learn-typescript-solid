interface Pessoa {
    nome: string;
}

interface Pesquisavel {
    areaPesquisa: string;
    pesquisa(): void;
}

interface Colaborador {
    cargaHoraria: number;
    trabalha(): void;
}

interface Remuneravel {
    salario: number;
    calculaSalarioLiquido(): number;
    calculaParticipacaoDeLucros(lucro: number): number;
}

interface Orientavel {
    orientador: Colaborador;
    escreveRelatorio(): void;
}

class ColaboradorEfetivo implements Pessoa, Colaborador, Remuneravel {
    constructor(public nome: string, public cargaHoraria: number, public salario: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`);
    }

    calculaSalarioLiquido(): number {
        const TAXA_DESCONTO = 0.2;
        const desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    }
    
    calculaParticipacaoDeLucros(lucro: number): number {
        return lucro * this.salario;
    }
}

class ColaboradorVoluntario implements Pessoa, Colaborador, Orientavel {
    nome: string;
    cargaHoraria: number;
    funciarioEfetivo: Funcionario;
    orientador: Funcionario;

    constructor(nome: string, funciarioEfetivo: Funcionario, cargaHorariaExtensao: number) {
        this.nome = nome;
        this.cargaHoraria = cargaHorariaExtensao;
        this.funciarioEfetivo = funciarioEfetivo;
        this.orientador = this.funciarioEfetivo;
    }

    escreveRelatorio(): void {
        console.log(`Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`);
    }

    trabalha(): void {
        console.log(`Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`);
    }
}

// Pesquisador - pode ser vinculado ou não à empresa
class Pesquisador implements Pessoa, Pesquisador {
    constructor(public nome: string, public areaPesquisa: string) {}
    trabalha(): void {
        throw new Error("Method not implemented.");
    }

    pesquisa(): void {
        console.log(`${this.nome} pesquisa em ${this.areaPesquisa}`);
    }
}

const colaboradorEfetivo = new FuncionarioEfetivo("João", 40, 2400);
const colaboradorVoluntario = new FuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);
const pesquisador = new Pesquisador("João", "Pequenos Negócios");
    
//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivo.calculaParticipacaoDeLucros(2.5), "\n");

//Voluntário
console.log("nome:", colaboradorVoluntario.nome);

//Pesquisador
console.log("nome:", pesquisador.nome);
pesquisador.pesquisa()