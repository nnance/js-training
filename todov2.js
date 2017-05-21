var data = [
  {
    username: "batman",
    subject: "Read about functional programming",
    dueDate: "01/15/2016",
    complete: false
  },
  {
    username: "robin",
    subject: "Try out the Node Stream Adventure",
    dueDate: "01/01/2016",
    complete: false
  },
  {
    username: "batman",
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

function filterComplete(data) {
    return data.filter(function(todo) {
        return !todo.complete
    });
}

function sortBy(data, prop) {
    return data.sort(function(a, b) {
        if (a[prop] < b[prop]) {
            return 0
        } else {
            return 1
        }
    })
}

function transform(data) {
    return data.map(function(todo) {
        return {
            user: todo['username'] || 'Superman',
            dueDate: todo.dueDate,
            subject: todo.subject,
        }
    })
}

function groupBy(data) {
    var group = {}
    data.forEach(function(todo) {
        if (!group[todo.username]) {
            group[todo.username] = []
        }
        group[todo.username].push(todo)
    })
    return group;
}

function sortByDate(groupedUser) {
    return Object.keys(groupedUser).reduce(function(prev, key){
        var sorted = sortBy(groupedUser[key],'dueDate')
        return prev.concat(sorted)
    }, [])
}

function activeByUser(data) {
    var filter = filterComplete(data);
    var groupedUser = groupBy(filter, 'username');
    var sortedDueDate = sortByDate(groupedUser);
    return transform(sortedDueDate);
}

console.dir(activeByUser(data));
