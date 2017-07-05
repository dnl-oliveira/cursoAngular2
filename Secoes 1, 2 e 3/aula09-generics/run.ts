import { Dao } from './dao';
import { Animal } from './../aula07-classes/animal';
import { Cavalo }  from './../aula07-classes/cavalo';

let dao: Dao<Animal> = new  Dao<Animal>();
let daoHorse: Dao<Cavalo> = new  Dao<Cavalo>();
let animal: Animal = new Animal('Rex');
let cavalo: Cavalo = new Cavalo('Pé de Pano');

dao.insert(animal);
daoHorse.insert(cavalo);