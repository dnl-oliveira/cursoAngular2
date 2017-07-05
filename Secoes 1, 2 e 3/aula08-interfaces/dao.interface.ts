export interface DaoInterface {

    tableName: string;
    
    insert(objet: any): boolean;
    update(objet: any): boolean;
    delete(id: number): any;
    find(id: number): any;
    findAll(): [any];



}