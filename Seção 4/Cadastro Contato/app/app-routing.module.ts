import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosListaComponent } from './contatos/contatos-lista.component';
import { ContatoDetalheComponent } from './contatos/contato-detalhe.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/contato',
        pathMatch: 'full'
    },
    {
        path: 'contato',
        component: ContatosListaComponent
    },
    {
        path: 'contato/save',
        component: ContatoDetalheComponent
    },
    {
        path: 'contato/save/:id',
        component: ContatoDetalheComponent
    }
];
//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}