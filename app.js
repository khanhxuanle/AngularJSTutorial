var myApp = angular.module('myApp', []);

myApp.service('nameService', function(){

    var self = this;
    
    this.name = 'Khanh';

    this.nameLength = function() {
        return self.name.length;
    };
});

myApp.directive('searchResult', function() {
     /* body... */ 
     return {
        restrict: 'AECM',
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope: {
            personName: '@',
            personAddress: '@'
        }
     }
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

    $scope.person = {
        name: 'Khanh Le',
        address: 'Ninh Binh'
    }


}]);





