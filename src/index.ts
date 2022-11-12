class Sorter {
    collection: number[] | string;

    constructor(collection: number[] | string) {
        this.collection = collection;
    }

    sort(): void {
        const { length } = this.collection;

        for(let i=0 ; i<length ; i++) {
            for(let j=0 ; j<length-i-1 ; j++) {
                //This if condition applies only to collections that are of type number[]
                if (this.collection instanceof Array) { 
                    if (this.collection[j] > this.collection[j+1]) {
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = temp;
                    }
                }
                
                //This if condition applies only to collections that are of type string
                if (this.collection instanceof String) {
                    
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log("Result: ", sorter.collection);
