import AuxiliarLimpeza from "../../auxiliarLimpreza";
import ChefConfeitaria from "./chefConfeitaria";
import ChefCozinha from "./chefCozinha";
import Cumin from "./cumin";
import Garcom from "./garcom";
import Recepcionista from "./recepcionista";

class Restaurante {
    private recepcionista: Recepcionista;
    private auxiliarLimpeza: AuxiliarLimpeza;
    private cumim: Cumin;
    private chefCozinha: ChefCozinha;
    private chefConfeitaria: ChefConfeitaria;
    private garcom: Garcom;
    
    constructor() {
        this.chefCozinha = new ChefCozinha();
        this.chefConfeitaria = new ChefConfeitaria();
        this.garcom = new Garcom();
        this.auxiliarLimpeza = new AuxiliarLimpeza();
        this.recepcionista = new Recepcionista();
        this.cumim = new Cumin();
    }

  iniciar() {
    this.recepcionista.organizarMesas();
    this.chefCozinha.cozinharPratoPrincipal();
    this.garcom.anotarPedido();
    this.auxiliarLimpeza.limpar();
    this.chefConfeitaria.prepararSobremesa();
    this.cumim.servirBebidas();
  }
}

const restaurante = new Restaurante();
restaurante.iniciar();