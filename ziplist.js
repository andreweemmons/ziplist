const list1 = ["a", "b", "c"];
const list2 = [1, 2, 3];
function zipList(list1, list2) {
  let z = [];
  for(var i = 0; i<list1.length; i++) {
    z.push(list1[i], list2[i]);
  }
  return z;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(list1, list2));

console.log(zipListTheSimpleWay(list1, list2));

