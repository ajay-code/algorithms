import LinkedList from "./linkedList";
import { linkedListMergeSort } from "./mergeSort";

let list = new LinkedList();

list.add(10).add(23).add(12).add(30).add(21);
list.print();

let sortedList = linkedListMergeSort(list);

sortedList.print();
