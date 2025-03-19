var LicencaPessoal = /** @class */ (function () {
    function LicencaPessoal() {
    }
    LicencaPessoal.prototype.calculaTaxa = function () {
        console.log("A lincensa pessoal custar\u00E1 R$ 10.00");
    };
    return LicencaPessoal;
}());
var LicencaComercial = /** @class */ (function () {
    function LicencaComercial(qtdUsuarios) {
        this.usuarios = qtdUsuarios;
    }
    LicencaComercial.prototype.calculaTaxa = function () {
        console.log("As lincen\u00E7as comercial custar\u00E3o R$ ".concat((this.usuarios * 10).toFixed(2)));
    };
    return LicencaComercial;
}());
// Sistema de Cobrança
function fazerCobranca(licenca) {
    return licenca.calculaTaxa();
}
var licencaPessoal = new LicencaPessoal();
var licencaComercial = new LicencaComercial(5);
// Ambos podem ser usuados onde uma Licenca é esperada.
fazerCobranca(licencaPessoal);
fazerCobranca(licencaComercial);
// Outra aplicação
var licencas = [
    new LicencaPessoal(),
    new LicencaComercial(5)
];
// Iterando sem se preocuar com o tipo específico
licencas.forEach(function (licenca) {
    fazerCobranca(licenca);
});
/* Seguimos aqui a LSP porque:

    - As interfaces são contratos sólidos
    - As implementações são intercambiáveis
    - O código cliente (fazerCobranca) permanece estável
    - Não há comportamentos inesperados na substituição
*/
