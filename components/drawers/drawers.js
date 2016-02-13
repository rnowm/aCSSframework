(function() {
    'use strict';
    angular.module('nj-drawers', [])
        .directive('njDrawerToggleMenu', njDrawerToggleMenu);
        
    /*@ngInject*/
    function njDrawerToggleMenu() {
        var directive = {
            restrict: 'A',
            link: drawerLink
        };
        return directive;
    }
    /*@ngInject*/
    function drawerLink (scope, element, attrs) {
        // Show menu on click on menu button.
        $(element).on('click', function() {
            $('.nj-drawer').addClass('show');
        });
        // Hide menu after cliking on link.
        $('.nj-drawer nav a').on('click', function() {
            if (!$(this).hasClass('no-toggle-menu')) {
                $('.nj-drawer').removeClass('show');
            }
        });
        // Stop propagation if clicking in nav but not in a link.
        $('.nj-drawer nav').on('click', function(event) {
            event.stopPropagation();
        });
        // Hide menu after clicking in the drawer.
        $('.nj-drawer').on('click', function(event) {
            $('.nj-drawer').removeClass('show');
        });
    }

})();
