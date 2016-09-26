todo.controller('TodoCtrl', ['$scope', '$window', function($scope, $window){

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

  $scope.create = function() {
    alert("Alert!");
  };

}]);