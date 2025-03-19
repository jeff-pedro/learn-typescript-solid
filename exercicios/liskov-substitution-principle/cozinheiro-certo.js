var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CozinheiroPai = /** @class */ (function () {
    function CozinheiroPai() {
    }
    CozinheiroPai.prototype.fazerLanche = function () {
        return 'X-Burguer simples';
    };
    return CozinheiroPai;
}());
var CozinheiroFilha = /** @class */ (function (_super) {
    __extends(CozinheiroFilha, _super);
    function CozinheiroFilha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CozinheiroFilha.prototype.fazerLanche = function () {
        return _super.prototype.fazerLanche.call(this) + ' com ovo, rafrango, bacon e picles';
    };
    CozinheiroFilha.prototype.fazerSuco = function () {
        return 'Preparando um suco bem refrescamte';
    };
    return CozinheiroFilha;
}(CozinheiroPai));
var cozinheiroPai = new CozinheiroPai();
console.log(cozinheiroPai.fazerLanche());
var cozinheiroFilha = new CozinheiroFilha();
console.log(cozinheiroFilha.fazerLanche());
