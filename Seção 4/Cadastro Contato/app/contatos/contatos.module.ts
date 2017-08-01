import { NgModule } from '@angular/core';
import { CommonModule } from   '@angular/common';
import { ContatoDetalheComponent } from './contato-detalhe.component';
import { ContatosListaComponent } from  './contatos-lista.component';
import { FormsModule } from '@angular/forms';
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
     ContatosListaComponent,
     ContatoDetalheComponent    
 ],
    exports: [ContatosListaComponent],
    providers: [ContatoService]
})
export class ContatosModule {}