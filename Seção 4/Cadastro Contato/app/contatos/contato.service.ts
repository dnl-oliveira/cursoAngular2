import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from '../in-memory-data.service';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';
import { ServiceInterface } from './../interfaces/service.interface';

@Injectable()
export class ContatoService implements ServiceInterface<Contato> {

    private apiUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    constructor(
        private http: Http
    ){}

    findAll(): Promise<Contato[]> {
        return this.http.get(this.apiUrl)
        .toPromise()
        .then(response => response.json().data as Contato[])
        .catch(this.handleError);
        //return Promise.resolve(CONTATOS);
    }
    find(id: number): Promise<Contato> {
        return this.findAll()
                .then((contatos: Contato[]) => contatos.find(contato => contato.id == id));                    
                
    }
    create(contato: Contato): Promise<Contato> {
        return this.http
        .post(this.apiUrl, JSON.stringify(contato), { headers: this.headers })
        .toPromise()
        .then((response: Response) => response.json().data as Contato)
        .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const url = `${this.apiUrl}/${contato.id}`; //app/contatos/:id
        return this.http
        .put(url, JSON.stringify(contato), { headers: this.headers })
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError);
    } 

    delete(contato: Contato): Promise<Contato> {
        const url = `${this.apiUrl}/${contato.id}`; //app/contatos/:id
        return this.http
        .delete(url, { headers: this.headers })
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError);
    }

    getContatoSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        }).then(() => this.getContatos());
    }

    private handleError(err: any) : Promise<any> {
        return Promise.reject(err.message || err);
    }

    search(term: string) : Observable<Contato[]>{
        return this.http
        .get(`${this.apiUrl}/?nome=${term}`)
        .map((res: Response) => res.json().data as Contato[]);
    }
}