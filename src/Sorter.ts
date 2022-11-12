interface Sortable {
    length: number;
    compare(leftIndexNmbr: number, rightIndexNmbr: number): boolean;
    swap(leftIndexNmbr: number, rightIndexNmbr: number): void
}

export class Sorter {
    collection: Sortable;

    constructor(collection: Sortable) {
        this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection; //the getter length is used here

        for(let i=0 ; i<length ; i++) {
            for(let j=0 ; j<length-i-1 ; j++) {

                    if (this.collection.compare(j, j+1)) {
                        this.collection.swap(j, j+1);
                    }
            }
        }
    }
}