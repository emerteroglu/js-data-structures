class node {
  constructor(_name) {
    this.name = _name;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = new node("Head");
    this.length = 0;
  }

  push(_item) {
    let item = new node(_item);

    if (this.size === 0) {
      this.head.next = item;
      this.length++;
    } else {
      item.next = this.head.next;
      this.head.next = item;
      this.length++;
    }
  }

  delete(_position) {
    if (_position < 0 || _position > this.length - 1) {
      return console.log("Index not in range");
    }
    let current = this.head;
    for (let i = 0; i <= _position; i++) {
      if (i === _position) {
        current.next = current.next.next;
        this.length--;
        break;
      }
      current = current.next;
    }
  }

  traverse() {
    let currentHead = this.head.next;
    for (let i = 0; i < this.length; i++) {
      console.log(`${currentHead.name} ->`);
      currentHead = currentHead.next;
    }
  }

  isEmpty() {
    if (this.head.next === null) return true;
    else return false;
  }

  indexOf(_find) {
    let currentHead = this.head.next;
    for (let i = 0; i < this.length; i++) {
      if (_find === currentHead.name) {
        return i;
      }
      currentHead = currentHead.next;
    }
    return false;
  }
}

module.exports = linkedList;
