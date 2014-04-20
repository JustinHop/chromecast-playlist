angular.module('receiver')
    .controller('MainController', ['$scope', function($scope) {

        $scope.current = {
            song: {
                title: 'Dat A S S',
                artist: 'Ass Man'
            },
            user: 'Butt Enthusiast'
        };

        $scope.rating = 90;

        $scope.goodRatingStyle = {
            height: $scope.rating + '%',
            width: '100%'
        };

        $scope.badRatingStyle = {
            height: (100 - $scope.rating) + '%',
            width: '100%'
        };

        $scope.next = {
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


