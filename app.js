var myApp = angular.module('myApp', []);

myApp.service('nameService', function(){

    var self = this;
    
    this.name = 'Khanh';

    this.nameLength = function() {
        return self.name.length;
    };
});


myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function() {
    	nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.nameLength());

    $scope.presskey = function() {
    	$log.log(nameService.name);
    	$log.log(nameService.nameLength());
    };


}]);





