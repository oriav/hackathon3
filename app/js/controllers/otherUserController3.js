angular.module('app')
    .controller('otherUser3Controller', function($scope, CurrentUser, $state, UserService) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
            console.log($scope.user);
        });
    });
