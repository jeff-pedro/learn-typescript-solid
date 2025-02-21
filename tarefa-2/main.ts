{
    const MES_COMERCIAL = 20; //dias trabalhados no mês

    interface ContratoRemuneravel {
        titulo: string;
        remuneracao(): number;
    }

    class ContratoClt implements ContratoRemuneravel {
        private GANHO_POR_HORA_CLT = 24;
        private CARGA_HORARIA_DIARIA_CLT = 8;
        titulo: string = 'CLT';

        remuneracao(): number {
            return  this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT
        }
    }

    class Estagio implements ContratoRemuneravel {
        private GANHO_POR_HORA_ESTAGIARIO = 14;
        private CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;
        titulo: string = 'Estagiario';

        remuneracao(): number {
            return  this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO
        }
    }


    class ContratoPj implements ContratoRemuneravel {
        private GANHO_POR_HORA_PJ = 36;
        private CARGA_HORARIA_DIARIA_PJ = 8;
        titulo: string = 'PJ';

        remuneracao(): number {
            return  this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ
        }
    }

    class FolhaDePagamento {
        static calcularSalarioMensal(funcionario: ContratoRemuneravel): number {
            return funcionario.remuneracao() * MES_COMERCIAL;
        }
    }

    const funcionarioClt = new ContratoClt();
    const funcionarioEstagiario = new Estagio();
    const funcionarioPj = new ContratoPj();

    console.log(`Sou ${funcionarioClt.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioClt)}`)
    console.log(`Sou ${funcionarioEstagiario.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)}`)
    console.log(`Sou ${funcionarioPj.titulo} e meu salário líquido mensal é R$ ${FolhaDePagamento.calcularSalarioMensal(funcionarioPj)}`)
}