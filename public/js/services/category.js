'use strict';
app.factory('Category', function ($resource) {
  return $resource('/categories/:id', {id: "@_id"});
});

// resource toma una ruta restfull del servidor en donde esta corriendo.
