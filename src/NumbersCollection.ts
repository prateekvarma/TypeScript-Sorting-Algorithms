export class NumbersCollection {
    data: number[];

    constructor(data: number[]) {
        this.data = data;
    }

    get length(): number { //getter
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]; //returns true or false
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    } 
}

// const collection = new NumbersCollection([1, 2, 3]);
// collection.length;