import { Node } from "./Node";

export default class LinkedList {
  head;

  constructor() {}

  /**
   * Returns true if there is no node in the LinkedList
   * Otherwise return false
   *
   * @returns boolean
   */
  isEmpty() {
    return this.head == null;
  }

  /**
   * Returns the number of nodes in LinkedList
   *
   * @returns {number} count
   */
  size() {
    let current = this.head,
      count = 0;

    while (current) {
      count += 1;
      current = current.nextNode;
    }

    return count;
  }

  /**
   *
   * @param {number} index
   */
  nodeAtIndex(index) {
    let position = 0;
    let current = this.head;

    while (position < index) {
      current = current.nextNode;
      position += 1;
    }

    return current;
  }

  /**
   * Adds new node with data at head of list
   * Takes O(1) time
   *
   * @param {*} data
   * @returns {this} self
   */
  add(data) {
    let newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
    return this;
  }

  /**
   * Adds new node with data at head of list
   * Takes O(1) time
   *
   * @param {*} data
   * @returns {this} self
   */
  addAtEnd(data) {
    this;
    let newNode = new Node(data);
    let current = this.head;
    if (current == null) {
      this.head = newNode;
      return this;
    }
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
    return this;
  }

  /**
   * Search for the first node containing the data that matches the key
   *
   * @param {*} key
   * @returns {Node | null}
   */
  search(key) {
    let current = this.head;

    while (current) {
      if (current.data === key) return current;
      else current = current.nextNode;
    }

    return null;
  }

  /**
   * Inserts a new Node at index position
   * Insertion Takes O(1) time
   * Finding insertion position Takes O(n) time
   * Overall Takes O(n) time
   *
   * @param {Node} data
   * @param {number} index
   * @return {this} self
   */
  insert(data, index = 0) {
    if (index == 0) {
      return this.add(data);
    } else if (index > 0) {
      let newNode = new Node(data),
        position = index,
        current = this.head;

      while (position > 1) {
        current = current.nextNode;
        position -= 1;
        if (current.nextNode == null) break;
      }

      let prevNode = current,
        nextNode = current.nextNode;

      prevNode.nextNode = newNode;
      newNode.nextNode = nextNode;
    }

    return this;
  }

  /**
   * Remove the Node containing data matching key
   *
   * @param {*} key
   * @returns {Node | null} removed node
   */
  removeByKey(key) {
    let current = this.head,
      prevNode = null,
      found = false;

    while (current && !found) {
      if (current.data === key && current === this.head) {
        found = true;
        this.head = current.nextNode;
      } else if (current.data === key) {
        found = true;
        prevNode.nextNode = current.nextNode;
      } else {
        prevNode = current;
        current = current.nextNode;
      }
    }

    return found ? current : null;
  }

  /**
   *
   * @param {number} index
   * @returns {Node | null} removed node
   */
  removeByIndex(index) {
    let current = this.head;

    if (index === 0) {
      this.head = current.nextNode;
      return current;
    } else if (index > 0) {
      let prevNode = current,
        position = index;
      while (position >= 1) {
        prevNode = current;
        current = current.nextNode;
        position -= 1;
      }
      if (current != null) {
        let nextNode = current.nextNode;
        prevNode.nextNode = nextNode;
      }
    }

    return current;
  }

  /**
   * Converts the LinkedList into its string equivalent
   *
   * @returns {string}
   */
  toString() {
    let current = this.head,
      nodes = [];

    while (current) {
      if (current === this.head) {
        nodes.push(`[Head: ${current.data}]`);
      } else if (current.nextNode == null) {
        nodes.push(`[Tail: ${current.data}]`);
      } else {
        nodes.push(`[${current.data}]`);
      }
      current = current.nextNode;
    }

    return nodes.join("-> ");
  }

  /**
   * Print the string equivalent of the LinkedList
   */
  print() {
    console.log(this.toString());
  }
}
