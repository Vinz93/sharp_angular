app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/notes/index.html',
      controller: 'NotesIndexCtrl',
    })

    .when('/notes', {
      templateUrl: 'views/notes/index.html',
      controller: 'NotesIndexCtrl',
    })

    .when('/notes/new', {
      templateUrl: 'views/notes/new.html',
      controller: 'NotesCreateCtrl',
    })

    .when('/notes/:id', {
      templateUrl: 'views/notes/show.html',
      controller: 'NotesShowCtrl',
    })

    .when('/notes/:id/edit', {
      templateUrl: 'views/notes/edit.html',
      controller: 'NotesEditCtrl',
    })

    .when('/users', {
      templateUrl: 'views/users/index.html',
      controller: 'UsersIndexCtrl',
    })

    .when('/users/:id', {
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowCtrl',
    })

    .otherwise({
      redirectTo: '/'
    });
});
