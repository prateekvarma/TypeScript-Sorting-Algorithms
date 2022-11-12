export class CharactersCollection {
    data: string;

    constructor (data: string) {
        this.data = data;
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
        //above, we're using toLowerCase because we're comparing string's numeric values, which
        //are different for upper & lower cases.
    }

    swap(leftIndex: number, rightIndex: number): void {
        const chars = this.data.split('');

        const temp = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = temp;

        this.data = chars.join('');
    }
}