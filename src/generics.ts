/* A FIFO (First In First Out) collection */
class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }
    pop(): T | undefined {
        return this.data.shift();
    }
}

const queue = new Queue<number>();
queue.push(123);
queue.push(456);

console.log(queue.pop()?.toPrecision(1));
console.log(queue.pop()?.toPrecision(1));