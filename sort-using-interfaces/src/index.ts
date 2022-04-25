import { Sorter } from "./Sorter";
import { NumbersCollecton } from "./NumbersCollections";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollecton = new NumbersCollecton([10, 3, -5, 0]);
const sorterNumberCollection = new Sorter(numbersCollecton);
sorterNumberCollection.sort();
console.log(numbersCollecton.data);

const charactersCollection = new CharactersCollection("vijay");
const soterStringCollection = new Sorter(charactersCollection);
soterStringCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
