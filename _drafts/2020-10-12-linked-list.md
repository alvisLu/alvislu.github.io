---
layout: post
title: Linked List 鏈結串列
categories:
tags: [Linked List, Data Structure]
---

Linked List (連結串列) 是一種動態的資料結構，不會按照順序儲存資料，而是在每個節點 `Node` 記錄資料 `value` 與下個節點的位置 `next`。
所有的節點 `Node` 串連起來就形成 `Linked List`，而最後一個節點的下個節點則為 `NULL`。

與 Array 相比，Linked List 有著更好的儲存放式，但在查詢方面就不是這麼的靈活了。

## Node 圖

```
+----------------------+
|        Node1         |
+----------+-----------+
|  value   |    next   |
|  (data)  | (address) |
+----------+-----------+
```

## Linked List 圖

```
      head
       |
       v
+--------------+
|     Node1    |
+-------+------+
| value | next |
+-------+--+---+
           |
           |   +--------------+
           |   |     Noder2   |
           |   +-------+------+
           +-> | value | next |
               +-------+--+---+
                          |
                          |   +--------------+
                          |   |     Noder3   |
                          |   +-------+------+
                          +-> | value | next +--> NULL
                              +-------+------+
                                     ...
                                     ...
                                     ...
```

## 實做 Linked List

- 每一個 `Node` 中有 `value` 與 `next`。`value` 是存放資料，`next` 是下一個 `Node` 的位置。
- 每一個 `Linked List` 都有個起始位置 `head`，也是第一個 `Node` 的位置。
- 最後一個 `Node` 指向 `NULL` 的位置。

``` javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}
```

以上就完成了 `LinkedList` 的結構。接著就來實現一些應用。

__新增 `append()`__

在 `LinkedList` 資料的結尾新增一筆 `Node`，並回傳新增後的 `list`。

``` javascript
  /**
   * Append `Node` at list tail
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let tail = this.head;
      while (tail.next != null) {
        tail = tail.next;
      }
      tail.next = node;
    }
    this.length++;
    return this;
  }
```

__刪除 `remove()`__

檢查 `index` 是否在範圍內，在範圍內才可做刪除的動做。

刪除開頭(第零個，index 由零開始記算) 與最後一個比較單純。
刪除開頭，只需將 `head` 直接指向下一個 `Node` 就可以了。

根據 [Linked List 圖](#linked-list-diagram) 最後一個 `Node` 的 `next` 是指向 `null`
那刪除第 n 個(`n < 0`) 呢？就要掃一次 `list` 找到第 n 個位置，並將第 `n-1` 個 `Node` 的 `next` 指向第 `n+1`。


指定想移除 `Node` 的 `index`，並回傳新 `list`。

```javascript
  /**
   * Is index at list?
   * @param {Int} index
   * @return {LinkedList}
   */
  _checkRange(index) {
    if (index < 0 || index > this.length) {
      throw new RangeError(`The value:${index} is not in range.`);
    }
  }
```

```javascript
/**
 * Remove Node at index
 * @param {Int} index
 * @return {LinkedList}
 */
remove(index) {
  this._checkRange(index);
  let current = this.head;
  if (index === 0) {
    this.head = this.head.next;
  } else if (index === this.length) {
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = null;
  } else {
    let previous = this.head;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
  this.length--;
  return this;
}



```

這樣就可以新增 `Linked List` ，來做個應用吧！

1. 給一個 `Array` 型態的 `input` 將其 `input` 轉會成 `Linked List`。
2. 接著使用該 `Linked List`，中間的數值。

Example:

- input = [1,2,4], output = 2
- input = [1,2,3,4], output = 3

```javascript
// convert an array to a linked list
const toList = (arr) => {
  const t = new LinkedList();
  for (let i = 0; i < arr.length; i++) {
    t.append(arr[i]);
  }
  return t;
};

// find head of linked list
const headAt = (list) => {
  return list.head;
};

// find middle node of linked list
const findMiddleNode = (head) => {
  let first = head;
  let second = head;

  while (first != null && first.next != null) {
    first = first.next.next;
    second = second.next;
  }
  return second;
};

const input = [2, 1, 5, 10, 6, 8, 9];
const list = toList(input);
console.log(list);
/**
 * output:
 * LinkedList {
 *   head: Node { value: 2, next: Node { value: 1, next: [Node] } }
 * }
 **/
const head = headAt(list);
const middle = findMiddleNode(head);
console.log(middle.value);
/**
 * output: 10
 **/
```

ref:

- [連結串列 wiki](https://zh.wikipedia.org/wiki/%E9%93%BE%E8%A1%A8)
- [Linked list Javascript 實作及 Leet code 題目解析](https://medium.com/@nchuuu/linked-list-es6-javascript%E5%AF%A6%E4%BD%9C%E5%8F%8Aleet-code%E9%A1%8C%E7%9B%AE%E8%A7%A3%E6%9E%90-4afcd9a67b3d)
