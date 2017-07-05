export interface DaoInterface<T> {

    tableName: string;
    
    insert(objet: T): boolean;
    update(objet: T): boolean;
    delete(id: number): T;
    find(id: number): T;
    findAll(): Array<T>;



}