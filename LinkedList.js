class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const linkedList = new LinkedList("First");

console.log(linkedList);

linkedList.addToHead('Second');

console.log(linkedList);

linkedList.addToHead('Third');

console.log(linkedList);

linkedList.addToHead('Forth');

console.log(linkedList);

linkedList.addToHead('Fifth');

console.log(linkedList);

