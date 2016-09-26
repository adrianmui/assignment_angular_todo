todo.controller('TodoCtrl', ['$scope', '$window', 'todoService', function($scope, $window, todoService){

  $scope.newItem = todoService.getNewItem();
  $scope.showCompleted = true;

  $scope.items = todoService.get();

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
  };

}]);