(function() {
    'use strict';

    angular.module('nj-spinners', [])
        .directive('njSpinner', njSpinner);


    function njSpinner() {

        var directive = {
            scope: {
                'overlay': '='
            },
            restrict: 'EA',
            replace: true, // Replace with the template below
            template:
                '<div ng-show="showSpinner" class="nj-spinner" ng-class="{\'overlay\': isOverlay}">' +
                    '<i icon="spinner"></i>' +
                '</div>',
            link: link
        }

        return directive;
    }

    /* @ngInject */
    function link (scope, element, attrs) {

        scope.isOverlay = scope.hasOwnProperty('overlay');

        scope.$on('NJ.SPINNER.START', function(){
            scope.showSpinner = true;
        });

        scope.$on('NJ.SPINNER.END', function(){
            scope.showSpinner = false;
            _.defer(function () {scope.$apply();});
        });

    }

})();
