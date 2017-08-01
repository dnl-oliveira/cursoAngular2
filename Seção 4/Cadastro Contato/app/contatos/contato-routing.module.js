//sem uso
"use strict";
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const contatos_lista_component_1 = require("./contatos-lista.component");
const contato_detalhe_component_1 = require("./contato-detalhe.component");
const contatoRoutes = [
    {
        path: '/contato',
        component: contatos_lista_component_1.ContatosListaComponent
    },
    {
        path: '/contato/save',
        component: contato_detalhe_component_1.ContatoDetalheComponent
    }
];
core_1.NgModule({
    imports: [
        router_1.RouterModule.forChild(contatoRoutes)
    ],
    exports: [router_1.RouterModule]
});
class ContatoRoutingModule {
}
exports.ContatoRoutingModule = ContatoRoutingModule;
//# sourceMappingURL=contato-routing.module.js.map