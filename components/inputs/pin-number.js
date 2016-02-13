(function () {
    'use strict';

    angular
    .module('nj-inputs', [])
    .directive('pinNumber', pinNumber);

    /* @ngInject */
    function pinNumber () {
        var directive = {
            restrict: 'E',
            template: function(elem, attrs) {
                var templates = tmpl.join("");
                return templates;
            },
            scope: {
                resetForm: '&',
                form: '=',
                label: '@',
                pinModel: '=',
                repeatLabel: '@',
                repeatModel: '=',
                currentLabel: '@',
                currentModel: '='
            },
            replace: true,
            controller: function(){},
            controllerAs: 'vm',
            bindToController: true
        };

        // @todo: create grunt task to be able to move this template to an external file.
        var tmpl = [
            '<div class="nj-pininput">',
                '<div ng-if="vm.currentLabel" class="nj-small-gutter" columns="5">',
                    '<span>',
                        '<label class="nj-input small" translate>{{vm.currentLabel}}</label>',
                    '</span>',
                    '<span column-span="4">',
                        '<input type="password" id="current_pin" name="current_pin" class="nj-input block nj-center" ng-model="vm.currentModel" maxlength="4" required ng-pattern="/^[0-9]{4}$/" ng-class="{\'nj-invalid\': vm.form.current_pin.$invalid && (vm.form.current_pin.$touched || vm.form.current_pin.$submitted)}" ng-change="vm.resetForm()">',
                    '</span>',
                '</div>',
                '<div class="nj-small-gutter" columns="5">',
                    '<span>',
                        '<label class="nj-input small" translate>{{vm.label}}</label>',
                    '</span>',
                    '<span column-span="4">',
                        '<input type="password" id="pin" name="pin" class="nj-input block nj-center" ng-model="vm.pinModel" maxlength="4" required ng-pattern="/^[0-9]{4}$/" ng-change="vm.resetForm()" ng-class="{\'nj-invalid\': vm.form.pin.$invalid && (vm.form.pin.$touched || vm.form.$submitted)}">',
                    '</span>',
                '</div>',
                '<div ng-if="vm.repeatLabel" class="nj-small-gutter" columns="5">',
                    '<span>',
                        '<label class="nj-input small" translate>{{vm.repeatLabel}}</label>',
                    '</span>',
                    '<span column-span="4">',
                        '<input type="password" id="repeat_pin" name="repeat_pin" class="nj-input block nj-center" ng-model="vm.repeatModel" maxlength="4" required ng-pattern="/^[0-9]{4}$/" ng-class="{\'nj-invalid\': vm.form.repeat_pin.$invalid && (vm.form.repeat_pin.$touched || vm.form.$submitted)}" ng-change="vm.resetForm()">',
                    '</span>',
                '</div>',
            '</div>'
        ];

        return directive;
    }

})();
