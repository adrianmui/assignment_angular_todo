todo.controller('TodoCtrl', ['$scope', '$window', 'todoService', function($scope, $window, todoService){

  $scope.newItem = {};
  $scope.showCompleted = true;

  $scope.items = todoService.getItems();

  $scope.clearCompleted = function() {
    todoService.clearCompleted();
  };

  $scope.toggleShowCompleted = function() {
    $scope.showCompleted = !$scope.showCompleted;
  };

  $scope.delete = function (item) {
    todoService.delete(item);
  };

  $scope.create = function (newItem) {
    todoService.create(newItem);
    $scope.newItem = {};
  };

}]);