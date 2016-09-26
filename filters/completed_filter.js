todo.filter( 'completedFilter', [function(){
  return function(items, showCompleted) {
    var filtered = items.slice();

    if (!showCompleted) {
      for (var i = items.length - 1; i >= 0; i--) {
        if (items[i].completed) {
          filtered.splice(i, 1);
        }
      }
    }

    return filtered;
  };

} ]);