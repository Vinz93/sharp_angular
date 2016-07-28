'use strict';
app.factory('Category', function ($resource) {
  return $resource('/categories/:id', {id: "@id"});
});

// resource toma una ruta restfull del servidor en donde esta corriendo.
