var Cozinheiro2Pai = /** @class */ (function () {
    function Cozinheiro2Pai() {
    }
    Cozinheiro2Pai.prototype.fazerLanche = function () {
        return 'X-Burguer simples';
    };
    return Cozinheiro2Pai;
}());
var Cozinheiro2Filha = /** @class */ (function () {
    function Cozinheiro2Filha() {
    }
    Cozinheiro2Filha.prototype.fazerLanche = function () {
        throw new Error('Não sei fazer lanches');
    };
    Cozinheiro2Filha.prototype.fazerSuco = function () {
        return 'Preparando um suco bem refrescamte';
    };
    return Cozinheiro2Filha;
}());
var cozinheiro2Pai = new Cozinheiro2Pai();
console.log(cozinheiro2Pai.fazerLanche());
var cozinheiro2Filha = new Cozinheiro2Filha();
console.log(cozinheiro2Filha.fazerLanche());
