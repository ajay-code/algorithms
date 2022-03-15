import LinkedList from "./linkedList";

let l = new LinkedList();

l.add(10);
l.add(20);
l.add(30);

l.print();
console.log(l.removeByIndex(3));
l.print();
