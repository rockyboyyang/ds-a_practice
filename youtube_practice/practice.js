/*
SETS

Methods:
Set.add()
Set.has()
Set.delete()

ARRAYS VS SETS

Arrays: 
- You can always use arrays
- Must use if order matters and/or duplicates are wanted

Sets:
- Only usable if order doesn't matter and only need unique values
- Can simplify data access(e.g. finding, deletion) compared to arrays

*/
const ids = new Set([1,2,3,4,4,4,4,4])

ids.add('hello')
ids.add(14)


for(const element of ids) {
    // console.log(element)
}

// console.log(ids.has(1))

ids.delete(1)
// console.log(ids)

/*
MAPS
- Ordered key-value pairs of data
- Element access via key
- iterable(= you can use the for-of loop )
- keys are unique, values are not
- keys can be anything (incl. reference values like arrays)
- Pure data storage, optimized for data access
*/

let map = new Map()

map.set('average', 1.53)
map.set('lastResult', null)

const country = {name: 'USA', population: 82};
map.set(country, 0.89)
// console.log(map)

for(const el of map) {
    // console.log(el)
}

map.set('average', 10)
// console.log(map.get('average'))
map.delete(country)
// console.log(map)

/* 
Linked List

*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null; // First element of the list
        this.tail = null; // Last element of the list
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value)

        if(this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode
        if(!this.head) {
            this.head = newNode;
        }
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value)

        if(this.head) {
            newNode.next = this.head
        }
        this.head = newNode
        if(!this.tail) {
            this.tail = newNode
        }
        this.length++

    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if(existingNode) {
            const newNode = new Node(value)
            existingNode.next = newNode;
        }
    }

    find(value) {
        if(!this.head) {
            return null;
        }

        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    delete(value) { // deletes all occurances, not just one
        if(!this.head) {
            return null;
        }

        while(this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head
        while(currentNode.next) {
            if(currentNode.next.value === value) {
                currentNode.next = currentNode.next.next
            } else {
                currentNode = currentNode.next
            }
        }

        if(this.tail.value === value) {
            this.tail = currentNode
        }

        this.length--
    }

    toArray() {
        const elements = [];
        
        let currentNode = this.head;
        while(currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next 
        }

        return elements
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(20)
linkedList1.append(32)
linkedList1.append(10)
linkedList1.append(90)
linkedList1.prepend(10)

console.log(linkedList1.toArray())
linkedList1.delete(10)
linkedList1.insertAfter(22, 32)
console.log(linkedList1.toArray())
// console.log(linkedList1.find(20))


