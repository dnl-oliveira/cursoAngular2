import { Component, Input, OnInit, OnChanges, Output, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Contato } from './contato.model';
import{ ContatoService } from './contato.service';
@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
        .cursor-pointer {
            cursor: pointer;
                }
    `]
})

export class ContatoBuscaComponent implements OnInit, OnChanges {
    
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();
    
    constructor(
        private contatoService: ContatoService,
        private router : Router
    ) {  }

    ngOnInit() { 
        this.contatos = this.termosDaBusca
            .debounceTime(500) // aguardar para chamar o server
            .distinctUntilChanged() // ignore termo de busca igual o anterior
            .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
            .catch(err => {
                console.log(err);
                return Observable.of<Contato[]>([]);
            });
    }
    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    search(termo: string): void {
        console.log(termo);
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }
    verDetalhe(contato: Contato): void {
        let link = ['contato/save', contato.id]
        this.router.navigate(link);
        this.buscaChange.emit('');
    }
}