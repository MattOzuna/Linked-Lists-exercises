/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode
      this.tail = newNode
    } 
    
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }


    this.length ++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else {
    newNode.next = this.head;
    this.head = newNode;
    };

    this.length ++
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head
    if (this.length === 0) return undefined;
    while(currentNode.next !== null){
        if (!currentNode.next.next){
          const response = currentNode.next;
          currentNode.next = null;
          this.tail = currentNode;
          this.length --;
          return response.val;
        }
        currentNode.next = currentNode.next.next
    };
    this.head = null
    this.tail = null
    this.length --;
    return currentNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head){
      const firstNode = this.head;
      this.head = this.head.next;
      this.length --;
      if (this.length <= 1) this.tail = this.head;
      return firstNode.val;
    };
    return undefined
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    let currentNode = this.head;
    for (let i=0; i < idx; i++){
      currentNode = currentNode.next;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    for (let i=0; i < idx; i++){
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // This function goes through the list equal to the idx # - 1, at that node we make sure we save the previous node and the node its currently on.
    // Then we set the previous nodes next value to the new node and the new nodes next value to the current node.

    let newNode = new Node(val)

    if (!this.length){
      this.head = newNode;
    } 
    
    else {
      let currentNode = this.head
      let previousNode = null
      for (let i = 0; i < idx; i++){
        previousNode = currentNode
        currentNode = currentNode.next
      }
      newNode.next = currentNode
      previousNode.next = newNode
    }

    if (newNode.next === null) this.tail = newNode
    this.length ++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let previousNode = this.head;

    for (let i = 0; i < idx; i++){
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;
    currentNode.next = null;

    this.length --;

    if (!this.length){
      this.head = null;
      this.tail = null;
    } 
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.length) return 0
    
    let sum = 0;
    let count = 0;
    let currentNode = this.head;
    while (currentNode){
      sum += currentNode.val;
      count ++;
      currentNode = currentNode.next;
    }
    return sum / count
  }
}

module.exports = LinkedList;
