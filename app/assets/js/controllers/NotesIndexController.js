angular.module('NoteWrangler')
    .controller('NotesIndexController',
            ['$http', '$scope', function($http, $scope) {
    //this.test = "my Controller"
    //var controller = this;
//    _this = this;
    //$http({method: 'GET' url: '/notes'})
        $http.get('/notes') //shorter version of the above code
        .success(function(data) {
        $scope.data = data;
    });
}]);