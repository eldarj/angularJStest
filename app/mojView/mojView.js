'use strict';

angular.module('myApp.mojView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mojView', {
            templateUrl: 'mojView/mojView.html',
            controller: 'mojViewCtrl'
        });
    }])

    .controller('mojViewCtrl', ['$scope', function($scope) {
        $scope.mojeIme = "Eldar";
        $scope.persons = [
            {name:"Eldar",lastname:"Jahijagić",age:"25",picUrl:"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"},
            {name:"Alen",lastname:"Hamdić",age:"35",picUrl:"https://image.freepik.com/free-psd/abstract-background-design_1297-73.jpg"},
            {name:"Mirela",lastname:"Atifović",age:"32",picUrl:"https://images.pexels.com/photos/11744/pexels-photo-11744.jpeg"}
        ];
        $scope.sickFunction = function($event, element) {
            alert(element.name + element.lastname);
            console.dir($event.currentTarget.attributes.class.nodeValue);
        }
    }])
    .directive('draggable', function () {
    return function(scope, element) {
        // this gives us the native JS object
        var el = element[0];

        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {
                console.log('---dragstart called');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', el.attributes.dataMyurl.nodeValue);
                console.dir(el.attributes.dataMyurl.nodeValue);
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                console.log('---dragend called');
                // console.dir(el);
                e.preventDefault();
                return false;
            },
            false
        );
    }
}).directive('droppable', function () {
    return {
        scope: {
            drop: '&' // parent
        },
        link: function(scope, element) {
            var el = element[0];
            console.log(el);
            el.addEventListener(
                'drop',
                function(e) {
                    // alert('Why im not called?');
                    var data = e.dataTransfer.getData("text/plain");
                    console.dir(data);
                    el.style.backgroundImage = "url('"+ data +"')";
                    e.preventDefault();
                    return false;
                },
                false
            );
        }
    }
});
