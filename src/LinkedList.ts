import { Sorter } from "./Sorter";

class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head; //the first node in chain
        while(tail.next){
            tail = tail.next; //if the node.tail prperty is not null, move forward.
        }

        tail.next  = node; //added the new node at the last of the linked list
    }

    get length(): number {
     if(!this.head) {
        return 0;
     }

     let length = 1;
     let node = this.head;
     while(node.next) {
        length++;
        node = node.next;
     }
     return length;
    }

    at(index: number): Node {
        if(!this.head) {
            throw new Error('Index out of bounds'); //we're asking an index that doesn't exist
        }

        let counter = 0;
        let node: Node | null = this.head;
        while(node) {
            if(counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds!'); //went through all nodes, and did not find
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) {
            throw new Error('List is empty');
        }

        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const temp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = temp;
    }

    print(): void {
        if(!this.head) {
            return; //it's an empty list
        }

        let node: Node | null = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }
}