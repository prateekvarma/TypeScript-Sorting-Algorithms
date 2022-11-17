class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList {
    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data);

        if(!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head; //the first node in chain
        while(tail.next){
            tail = tail.next; //if there is a next tail, move forward.
        }

        tail.next  = node;
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
}