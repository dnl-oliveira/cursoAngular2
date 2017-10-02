import { NgModule } from '@angular/core';
import { CommonModule } from   '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContatoBuscaComponent } from './contato-busca.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosListaComponent } from  './contatos-lista.component';

//import { ContatoRoutingModule } from './contato-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { ContatoService } from './contato.service';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ],
 declarations: [   
     ContatoBuscaComponent,  
     ContatosListaComponent,
     ContatoDetalheComponent    
 ],
    exports: [
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers: [ContatoService]
})
export class ContatosModule {}