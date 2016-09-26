todo.filter('sortFilter', function(){
  return function(items, sortChoice) {
    var filtered = items.slice();

    switch(sortChoice) {
      case '1':
        var completedItems = [];
        for (var i = 0; i < filtered.length; i++) {
          if (!filtered[i].completed) {
            completedItems.push(filtered.splice(i,1));
          }
        }
        filtered = completedItems.concat(filtered);
        break;
      case '2':
        completedItems = [];
        for (i = 0; i < filtered.length; i++) {
          if (!filtered[i].completed) {
            completedItems.push(filtered.splice(i,1));
          }
        }
        filtered = filtered.concat(completedItems);
        break;
      case '3':
        break;
      case '4':
        break;
      default:
        break;
    }

    return filtered;
  };
});