angular.module('NoteWrangler')
    .controller('NoteEditController',
            ['$http', '$scope', '$routeParams', function($http, $scope, $routeParams) {
        $http.get('/notes/'+$routeParams.id) //shorter version of the above code
        .success(function(data) {
        $scope.data = data;
    });
                
    $scope.saveNote = function(note){
        $http({method:"UPDATE",'/notes/'+ note.id, data:note }).success(function(data){
            console.log("SUCCESS");
        }).error(function(data);
                )
              //missing code here                    
                                                                        
    }            
}]);