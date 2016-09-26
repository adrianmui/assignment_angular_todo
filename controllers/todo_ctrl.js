todo.controller('TodoCtrl', ['$scope', '$window', function($scope, $window){

  $scope.newItem = {};

  $scope.items = [
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

  $scope.clearCompleted = function() {
    $scope.items.map( function(el) {
      return (el.completed);
    })
  };

  $scope.delete = function(item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };

  $scope.create = function(newItem) {
    var newerItem = {};
    newerItem.text = newItem.text;
    newerItem.dueDate = newItem.dueDate || new Date();
    newerItem.completed = false;

    console.log("text: " + newItem.text);
    console.log("Due Date: " + newItem.dueDate);

    $scope.items.push(newerItem);

    $scope.newItem = {};
  };

}]);