'use strict';
app.factory('Note', function ($resource) {
  return $resource('/notes/:id', {id: "@id"}, {
      'update': {
        method: "PUT"
      }
    });
});

// resource toma una ruta restfull del servidor en donde esta corriendo.
