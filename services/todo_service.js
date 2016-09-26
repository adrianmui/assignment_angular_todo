todo.factory('todoService' , function() {
  var stub = {};

  var _newItem = {};

  var _items = [
  {
    text: "Get groceries from store",
    dueDate: new Date(),
    completed: false
  },
  {
    text: "Mow the lawn",
    dueDate: new Date(),
    completed: false
  },
  {
    text: "Wash the dishes",
    dueDate: new Date(),
    completed: false
  },
  {
    text: "Scrub the floor",
    dueDate: new Date(),
    completed: false
  },
  ];

  stub.get = function() {
    return _items;
  }

  stub.create = function(newItem) {
    var newerItem = {};
    newerItem.text = newItem.text;
    newerItem.dueDate = newItem.dueDate || new Date();
    newerItem.completed = false;

    console.log("text: " + newItem.text);
    console.log("Due Date: " + newItem.dueDate);

    _items.push(newerItem);

    $scope.newItem = {};
  };

  stub.delete = function(item) {
    var index = _items.indexOf(item);
    _items.splice(index, 1);
  };

  stub.clearCompleted = function() {
    for (var i = _items.length - 1; i >= 0; i--) {
      if (_items[i].completed){
        _items.splice(i, 1);
      }
    }
  };



});