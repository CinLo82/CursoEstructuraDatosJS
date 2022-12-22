class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode; 
        this.length++; 

        return this;
    }

    preppend(value){
        const newNode = new Node(value); 
        newNode.next = this.head; 
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this; 
    }

    getTheIndex(index){ 
        let counter = 0; 
        let currentNode = this.head; 

        while (counter !== index) { 
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insertNewNode(index, value){
        if(index >= this.length){ 
            const lastNode = new Node(value);

            return this.append(lastNode);
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        holdingPointer.prev = newNode;
        newNode.next = holdingPointer;
        newNode.prev = firstPointer;
        firstPointer.next = newNode
        this.length++;
 
        return this;
    }
    removeNode(index){
        if(index <= 0){ 
            const newHead = this.head.next;
            this.head = newHead;
            this.length--;

            return this;
        } else if(index >= this.length){
            const lastNode = this.tail.prev;
            this.tail = lastNode;
            this.length--;

            return this;
        }
        let formerPointer = this.getTheIndex(index - 1);
        let latterPointer = this.getTheIndex(index + 1);
        formerPointer.next = latterPointer;
        latterPointer.prev = formerPointer;
        this.length--;

        return this;
    }
};

let myDoublyLinkedList = new MyDoublyLinkedList(1);