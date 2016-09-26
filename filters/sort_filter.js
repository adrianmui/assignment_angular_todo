todo.filter('sortFilter', function(){
  return function(items, sortChoice) {
    var filtered = items.slice();

    switch(sortChoice) {
      case '1':
        var completedItems = [];
        for (var i = 0; i < filtered.length; i++) {
          if (!filtered[i].completed) {
            completedItems.push(filtered.splice(i,1)[0]);
          }
        }
        filtered = filtered.concat(completedItems);
        
        break;
      case '2':
        completedItems = [];
        for (i = 0; i < filtered.length; i++) {
          if (!filtered[i].completed) {
            completedItems.push(filtered.splice(i,1)[0]);
          }
        }
        filtered = completedItems.concat(filtered);
        break;
      case '3':
        var sortedItems = [];
        var times = filtered.length;
        for (var  j = 0; j < times; j++) {
          var temp = new Date();
          var tindex;
          for (var i = filtered.length - 1; i >= 0; i--) {

            if (filtered[i].dueDate < temp) {
              temp = filtered[i].dueDate;
              tindex = i;
            }
          }
          if (tindex >= 0) {
            sortedItems.push(filtered.splice(tindex,1)[0]);
          } else {
            sortedItems.push(filtered.pop())
          }
        }

        filtered = sortedItems;
        

        break;

      case '4':
        var sortedItems = [];
        var times = filtered.length;
        for (var  j = 0; j < times; j++) {
          var temp = new Date();
          var tindex;
          for (var i = filtered.length - 1; i >= 0; i--) {

            if (filtered[i].dueDate < temp) {
              temp = filtered[i].dueDate;
              tindex = i;
            }
          }
          if (tindex >= 0) {
            sortedItems.push(filtered.splice(tindex,1)[0]);
          } else {
            sortedItems.push(filtered.pop())
          }
        }
        filtered = sortedItems.reverse();

        break;

      default:
        break;
    }

    return filtered;
  };
});