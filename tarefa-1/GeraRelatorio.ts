import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class GeraRelatorio {
    private readonly _colaboradores: Colaborador[];
    
    constructor(colaboradores: Colaborador[], private servicoCalculaSalario: CalculaSalario) {
        this._colaboradores = colaboradores;
    }

    gerarJSON() {
        let relatorio = this._colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.servicoCalculaSalario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}