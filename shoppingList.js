var myList = [];

function addItem(description, qty) {
  myList.push([description, qty]);
  return myList;
}

console.log(addItem("Chocolate Bar", 15)[0][1]) // 15
console.log(addItem("Peanut Butter", 2)[1][0]) // Peanut Butter
