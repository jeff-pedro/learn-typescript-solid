import Colaborador from "./Colaborador";
import QuadroColaboradores from "./QuadroColaboradores";
import GeraRelatorio from "./GeraRelatorio";
import { Cargos } from "./enum/cargos";
import Pagamento from "./Pagamento";
import CalculaSalario from "./CalculaSalario";

const quadroColaboradores = new QuadroColaboradores();
const calculaSalario = new CalculaSalario();
const geradorDeRelatorios = new GeraRelatorio(quadroColaboradores.colaboradores, calculaSalario);
const pagamento = new Pagamento(calculaSalario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

quadroColaboradores.contratar(colaborador1);
quadroColaboradores.contratar(colaborador2);
quadroColaboradores.contratar(colaborador3);

console.log(geradorDeRelatorios.gerarJSON());

console.log(colaborador1);
pagamento.pagar(colaborador1);
console.log(colaborador1);