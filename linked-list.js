

class Node {
    constructor(){
        this.value = null;
        this.next = null;

    }
}


class LinkedList {
    constructor() {
        this.init = new Node()

    }

    /**
     * 
     * @param {number} item number to insert in list
     */
    push(item) {
        if ( this.init.value === null ) {
            this.init.value = item;

        } else {
            let pointer = this.init;
            let pointer2 = this.init; 

            while( pointer.next !== null ) {
                if ( pointer.value === this.init.value ) {
                    pointer = pointer.next;

                } else {
                    pointer = pointer.next;
                    pointer2 = pointer2.next;

                }
                
            }

            pointer.next = new Node();
            pointer2 = pointer2.next;
            pointer = pointer.next;
            pointer.value = item;
        }
    }

    pop() {
        let pointer = this.init;
        let result = 0;

        if ( pointer.next === null ) {
            result = pointer.value;
            pointer.value = null;

        } else {
            let pointer2 = pointer;

            while ( pointer.next !== null ) {
                if ( pointer.value === this.init.value ) {
                    pointer = pointer.next;

                } else {
                    pointer = pointer.next;
                    pointer2 = pointer2.next;

                }
            }

            result = pointer.value;
            pointer2.next = null;
        }

        return result;
    }

    shift() {
        let result = this.init.value;

        if ( this.init.next === null ) {
            this.init.value = null;

        } else {
            this.init = this.init.next;
        }

        return result;

    }

    /**
     * 
     * @param {number} item number inserted at the beginning of the list
     */
    unshift(item) {
        if ( this.init.value === null) {
            this.init.value = item;
        } else {
            let newHead = new Node();
            newHead.value = item;
            newHead.next = this.init;
            this.init = newHead;
        }

    }

    /**
     * 
     * @param {number} item number to be deleted from the linkedlist
     */
    delete(item) {
        if ( this.init.next === null && this.init.value === item ) {
            this.init.value = null;

        } else if ( this.init.next !== null ) {
            // if deleted element is at the beginning of the list
            if ( this.init.next !== null && this.init.value === item ) {
                this.init = this.init.next;

            // if deleted element is at the middle or at the end of the list
            } else {
                let pointer = this.init.next;
                let pointer2 = this.init;

                while ( pointer.value !== item && pointer.next !== null ) {
                    pointer = pointer.next;
                    pointer2 = pointer2.next;
                }

                if ( pointer.value === item ) {
                    pointer2.next = pointer.next;
                    pointer.next = null;
                }
                
            }
        }
    }

    count() {
        let counter = 0;
        let pointer = this.init;

        if ( pointer.value !== null ) {
            counter++;

            while ( pointer.next !== null ) {
                counter++;
                pointer = pointer.next;
            }
        }

        return counter;
    }
}

let myList = new LinkedList();

// console.log(myList.unshift(7));
// console.log(myList.unshift(14));

console.log(myList.push(7));
console.log(myList.delete(23));
// console.log(myList.push(3));
// console.log(myList.push(3));
// console.log(myList.push(4));

// console.log(myList.pop());
// console.log(myList.shift());

console.log(myList.count());