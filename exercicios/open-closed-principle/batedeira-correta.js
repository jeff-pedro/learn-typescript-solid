var BatedorGlobo = /** @class */ (function () {
    function BatedorGlobo() {
    }
    BatedorGlobo.prototype.bater = function () {
        console.log("Com esse batedor eu posso fazer sorvete!");
    };
    return BatedorGlobo;
}());
var BatedorLeque = /** @class */ (function () {
    function BatedorLeque() {
    }
    BatedorLeque.prototype.bater = function () {
        console.log("Com esse batedor eu posso fazer biscoito!");
    };
    return BatedorLeque;
}());
var BatedorGancho = /** @class */ (function () {
    function BatedorGancho() {
    }
    BatedorGancho.prototype.bater = function () {
        console.log("Com esse batedor eu posso fazer pão!");
    };
    return BatedorGancho;
}());
var BatedeiraPlanetaria = /** @class */ (function () {
    function BatedeiraPlanetaria(batedor) {
        this.batedor = batedor;
    }
    BatedeiraPlanetaria.prototype.bater = function () {
        return this.batedor.bater();
    };
    return BatedeiraPlanetaria;
}());
var batedorGancho = new BatedorGancho();
var batedeira = new BatedeiraPlanetaria(batedorGancho);
batedeira.bater(); // Saída: Com esse batedor eu posso fazer pão!
