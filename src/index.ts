import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

//Below, code is according to Inheritance and Abstraction
// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// numbersCollection.sort();
// console.log("Result: ", numbersCollection.data);

// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

//Below, code is according to Inheritance and Abstraction
// const charactersCollection = new CharactersCollection('Xaasy');
// charactersCollection.sort();
// console.log(charactersCollection.data);

//Below, code is according to Inheritance and Abstraction
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print(); //should print -10,-3,4,500 on node console