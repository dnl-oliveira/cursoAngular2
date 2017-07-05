//from caminho da classe que vai importar + nome do arquivo sem extensão
import { Animal } from './animal';

//Herança extends
//USAR export para permitir o import da classe em outros arquivos
export class Cavalo extends Animal{

    constructor(nome: string){
        super(nome);
    }
    //Sobrescrita de metodos
    public mover(distanciaEmMetros: number): void{
        console.log('Galopando...')
        super.mover(distanciaEmMetros);
    }

}