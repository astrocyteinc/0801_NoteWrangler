angular.module('NoteWrangler')
    .directive('nwNote', function(){
        return {
            restrict: 'E', // 'A' is default A=attribute, E=Object
            templateUrl: 'assets/templates/directives/nwNote.html',
            scope: {
                title: "=",
                link: "=",
                description: "=",
                category: '@',
            }
        }
});