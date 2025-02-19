"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auxiliarLimpreza_1 = require("../../auxiliarLimpreza");
var chefConfeitaria_1 = require("./chefConfeitaria");
var chefCozinha_1 = require("./chefCozinha");
var cumin_1 = require("./cumin");
var garcom_1 = require("./garcom");
var recepcionista_1 = require("./recepcionista");
var Restaurante = /** @class */ (function () {
    function Restaurante() {
        this.chefCozinha = new chefCozinha_1.default();
        this.chefConfeitaria = new chefConfeitaria_1.default();
        this.garcom = new garcom_1.default();
        this.auxiliarLimpeza = new auxiliarLimpreza_1.default();
        this.recepcionista = new recepcionista_1.default();
        this.cumim = new cumin_1.default();
    }
    Restaurante.prototype.iniciar = function () {
        this.recepcionista.organizarMesas();
        this.chefCozinha.cozinharPratoPrincipal();
        this.garcom.anotarPedido();
        this.auxiliarLimpeza.limpar();
        this.chefConfeitaria.prepararSobremesa();
        this.cumim.servirBebidas();
    };
    return Restaurante;
}());
var restaurante = new Restaurante();
restaurante.iniciar();
