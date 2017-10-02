export interface ServiceInterface<T> {
    
    findAll(): Promisse<T[]>;
    find(id: number): Promisse<T>;
    create(object: T): Promisse<T>;
    update(object: T): Promisse<T>;
    delete(object: T): Promisse<T>;


}