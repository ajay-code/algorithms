export class Node {
  data;
  nextNode;

  constructor(data) {
    this.data = data;
  }

  toString() {
    return `<Node Data: ${this.data}>`;
  }
}

export default class LinkedList {
  head;

  constructor() {}

  isEmpty() {
    return this.head === undefined || this.head === null;
  }

  size() {
    let current = this.head,
      count = 0;

    while (current) {
      count += 1;
      current = current.nextNode;
    }

    return count;
  }

  add(data) {
    /**
     * Adds new node with data at head of list
     * Takes O(1) time
     */
    let newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  toString() {
    let current = this.head,
      nodes = [];
    while (current) {
      if (current === this.head) {
        nodes.push(`[Head: ${current.data}]`);
      } else if (current.nextNode === undefined || current.nextNode === null) {
        nodes.push(`[Tail: ${current.data}]`);
      } else {
        nodes.push(`[${current.data}]`);
      }
      current = current.nextNode;
    }
    return nodes.toString();
  }

  printAllNodeData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.nextNode;
    }
  }
}
