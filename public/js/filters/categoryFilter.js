app.filter('categoryFilter',function () {
  return function (collection , category) {
    var newCollection = [];
    if(category){
      for( var i = 0 ; i < collection.length; i++) {
        if(collection[i].category == category){
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    }else{
      return collection;
    }


  }
});
