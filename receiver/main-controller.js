angular.module('receiver')
    .controller('MainController', ['$scope', function($scope) {

        $scope.first = {
            song: {
                title: 'Dat A S S',
                artist: 'Ass Man'
            },
            user: 'Butt Enthusiast'
        };

        $scope.queue = [{
    song: {
        title: 'Dat A S S',
        artist: 'Ass Man'
    },
    user: 'Butt Enthusiast'
},{
    song: {
        title: 'Dat A S S',
        artist: 'Ass Man'
    },
    user: 'Butt Enthusiast'
},{
    song: {
        title: 'Dat A S S',
        artist: 'Ass Man'
    },
    user: 'Butt Enthusiast'
}];
    }]);


