export class Node {
  data;
  nextNode;

  constructor(data) {
    this.data = data;
  }

  toString() {
    return `<Node Data: ${this.data}>`;
  }

  print() {
    console.log(this.toString());
  }
}
