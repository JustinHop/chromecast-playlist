angular.module('receiver')
    .directive('song', [function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                request: '=info'
            },
            templateUrl: 'song.html'
        };
    }]);
