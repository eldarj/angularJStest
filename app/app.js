'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.mojView',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
controller('myCtrl', function($scope, $rootScope, $location, $http, $timeout) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.mycolor = {firstcolor:"red",secondcolor:"blue"};
    $scope.myEmail = "eldar.jah@gmail.com";
    $scope.names = [{name:"Eldar",country:"BiH"}, {name:"Alen",country:"BiH"}, {name:"Dino",country:"Croatia"}];
    $scope.deleteName = function() {
        $scope.firstName = $scope.lastName = "";
    };
    $rootScope.rootIme = "admin";
    $scope.myLocation = $location.absUrl();
    $timeout(function(){
        $http
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                $scope.callStatus = response.status;
                $scope.callStatusText = response.statusText;
                $scope.myApiCall = response.data;
            }, function() {$scope.callStatusText = $scope.callStatus = $scope.myApiCall = "ERROR"});
    }, 1000);
    $scope.myfunc = function($e) {
        console.log('mousedover!');
    }
}).
directive("testDirective", function() {
    return {
        template: "I was made in a directive constructor!"
    };
});
