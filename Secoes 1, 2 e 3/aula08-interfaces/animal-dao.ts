import{ DaoInterface } from './dao.interface';
import{ Animal } from './../aula07-classes/animal';

export class AnimalDao implements DaoInterface {

    tableName: string = '';

    insert(Object: Animal): boolean {
        console.log('Inserindo...')
        Object.mover(50);
        return true;
    }

    update(Object: Animal): boolean {
        return true;
    }

    delete(id: number): Animal {
        return null;
    }

    find(id: number): Animal {
        return null;
    }

    findAll(): [Animal] {
        return [new Animal('Rex')];
    }


}
