'use strict';
app.factory('User', function ($resource) {
  return $resource('/users/:id', {id: "@_id"});
});

// resource toma una ruta restfull del servidor en donde esta corriendo.
