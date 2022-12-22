// 1 --> 2 --> 3 --> 4 --> null

// let sunglyLinkedList = {
//     head: {
//         value:1,
//         next: {
//             value:2,
//             next: {
//                 value:3,
//                 next: {
//                     value:4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

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
    append(value) {
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.lenght++;

        return this;
    }
    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.lenght++;

        return this;
    }
    insert(index, value) {
        if(index >= this.lenght) {
            console.log('no hay suficientes elem, entonces lo mando al final');
            return this.append(value)
        }
        if (index === 0) {

            return this.AddFirst(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1); 
        const holdingPointer = firstPointer.next; 
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.lenght++;

        return this;
    }
    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const firstPointer = this.getTheIndex(index - 1);
        const nextPointer = this.getTheIndex(index + 1);
        firstPointer.next = nextPointer;
        this.length -= 1;
         this;
    }
    
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(4);
myLinkedList.prepend(0);
myLinkedList.insert(3, 3);
myLinkedList.remove(3);
console.log(myLinkedList);