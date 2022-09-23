const linkedList = require("./linkedList.js");

let list = new linkedList();

list.push("one");
list.push("two");
list.push("three");
list.push("four");
list.push("five");

list.traverse();

let item = "three";

if (list.indexOf(item)) {
  console.log(`linkedList has item named '${item}'`);
}

list.delete(list.indexOf(item));

if (list.indexOf(item)) {
  console.log(`linkedList has item named '${item}'`);
} else {
  console.log(`linkedList doesn't have item named '${item}'`);
}
