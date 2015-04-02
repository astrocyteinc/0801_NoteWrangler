angular.module('NoteWrangler')
    .controller('NoteShowController',
            ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
        $http.get('/notes/'+$routeParams.id) //shorter version of the above code
        .success(function(data) {
        $scope.data = data;
    });
}]);