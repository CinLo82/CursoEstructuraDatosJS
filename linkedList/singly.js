1 --> 2 --> 3 --> 4 --> null

let sunglyLinkedList = {
    head: {
        value:1,
        next: {
            value:2,
            next: {
                value:3,
                next: {
                    value:4,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;

        this.lenght = 1;
    }
}

let myLinkedList = new MySinglyLinkedList(1);