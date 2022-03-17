import LinkedList from "../linkedList";

/**
 * Sort a linked list in ascending order
 *
 * @param {LinkedList} linkedList
 * @returns {LinkedList} sortedLinkedList
 */
export default function linkedListMergeSort(linkedList) {
  if (linkedList.size() === 1) {
    return linkedList;
  } else if (linkedList.head == null) {
    return linkedList;
  }

  let [leftHalf, rightHalf] = split(linkedList);

  let left = linkedListMergeSort(leftHalf);
  let right = linkedListMergeSort(rightHalf);

  return merge(left, right);
}

/**
 * Splits a linkedList form middle,
 * and returns two linkedLists left and right
 *
 * @param {LinkedList} linkedList
 * @returns {[LinkedList, LinkedList]}
 */
function split(linkedList) {
  let left, right;
  if (linkedList == null || linkedList.head == null) {
    left = linkedList;
    right = null;
    return [left, right];
  } else {
    let size = linkedList.size();
    let mid = Math.floor(size / 2);
    let midNode = linkedList.nodeAtIndex(mid - 1);

    left = linkedList;
    right = new LinkedList();
    right.head = midNode.nextNode;
    midNode.nextNode = null;
  }

  return [left, right];
}

// /**
//  * Merges two linked lists, sorting data in nodes
//  * returns a new merged list
//  *
//  * @param {LinkedList} left
//  * @param {LinkedList} right
//  * @returns {LinkedList} sortedList
//  */
// function merge(left, right) {
//   let list = new LinkedList();
//   let cl = left.head,
//     cr = right.head;

//   while (cl && cr) {
//     if (cl.data < cr.data) {
//       list.addAtEnd(cl.data);
//       cl = cl.nextNode;
//     } else {
//       list.addAtEnd(cr.data);
//       cr = cr.nextNode;
//     }
//   }

//   while (cl) {
//     list.addAtEnd(cl.data);
//     cl = cl.nextNode;
//   }

//   while (cr) {
//     list.addAtEnd(cr.data);
//     cr = cr.nextNode;
//   }

//   return list;
// }

/**
 * Merges two linked lists, sorting data in nodes
 * returns a new merged list
 *
 * @param {LinkedList} left
 * @param {LinkedList} right
 * @returns {LinkedList} sortedList
 */
function merge(left, right) {
  let list = new LinkedList();
  list.add(0);
  let current = list.head;
  let lh = left.head,
    rh = right.head;

  while (lh || rh) {
    if (lh == null) {
      current.nextNode = rh;
      rh = rh.nextNode;
    } else if (rh == null) {
      current.nextNode = lh;
      lh = lh.nextNode;
    } else {
      if (lh.data < rh.data) {
        current.nextNode = lh;
        lh = lh.nextNode;
      } else {
        current.nextNode = rh;
        rh = rh.nextNode;
      }
    }
    current = current.nextNode;
  }

  list.head = list.head.nextNode;

  return list;
}
