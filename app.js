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
            personAddress: '@',
            personObject: '=',
            formattedAddressFunction: '&'
        },
        transclude: true
        
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

    $scope.people = [
        {
        name: 'Khanh Le',
        address: 'Ha Noi',
        city: 'Ninh Binh',
        country: 'Viet Nam'
        },
        {
        name: 'Phu Le',
        address: 'Ninh Binh',
        city: 'Ninh Binh',
        country: 'Viet Nam'
        },
        {
        name: 'Phong Le',
        address: 'Ha Noi',
        city: 'Ninh Binh',
        country: 'Viet Nam'
        },
    ];
    
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.country;
    };


}]);





