var _ = require("lodash")

function filterComplete(data) {
  return data.filter(todo => !todo.complete)
}

function sortDate(a, b) {
  if (a.dueDate < b.dueDate) {
    return -1
  } else if (a.dueDate > b.dueDate) {
    return 1
  } else {
    return 0
  }
}

function sortByDueDateDesc(data) {
  return data.sort(sortDate).reverse()
}

function groupByUser(data) {
  return data.reduce(function(acc, item) {
    var key = item.username;
    acc[key] = acc[key] || [];
    acc[key].push({
      subject: item.subject,
      dueDate: item.dueDate
    });
    return acc;
  }, {});
}

var activeByUser = _.flow(filterComplete, sortByDueDateDesc, groupByUser);

var data = [
  {
    username: "batman",
    subject: "Read about functional programming",
    dueDate: "01/15/2016",
    complete: false
  },
  {
    username: "batman",
    subject: "Try out the Node Stream Adventure",
    dueDate: "01/01/2016",
    complete: false
  },
  {
    username: "robin",
    subject: "Build Todo app based on Highland js",
    dueDate: "02/01/2016",
    complete: true
  },
  {
    username: "robin",
    subject: "Build GraphQL server for Star Wars API",
    dueDate: "03/01/2016",
    complete: false
  }
]

console.dir(activeByUser(data));
