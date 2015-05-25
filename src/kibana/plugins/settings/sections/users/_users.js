define(function (require) {
  var _ = require('lodash');
  var registry = require('plugins/settings/saved_object_registry');
  var objectIndexHTML = require('text!plugins/settings/sections/users/_users.html');

  require('routes')
  .when('/settings/users', {
    template: objectIndexHTML
  });
  require('routes')
  .when('/settings/users/new', {
    template: require('text!plugins/settings/sections/users/_create.html')
  });
  require('modules').get('apps/settings')
  .directive('kbnSettingsUsers', function (config, Notifier, Private, kbnUrl) {
    return {
      restrict: 'E',
      controller: function ($scope, $injector, $q, AppState) {

        var $state = $scope.state = new AppState();

        var resetCheckBoxes = function () {
          $scope.deleteAll = false;
          _.each($scope.services, function (service) {
            _.each(service.data, function (item) {
              item.checked = false;
            });
          });
        };

        var getData = function (filter) {

        };

        $scope.$watch('deleteAll', function (checked) {

        });

        $scope.open = function (item) {

        };

        $scope.edit = function (service, item) {
        };

        $scope.toggleDeleteBtn = function (service) {

        };

        $scope.bulkDelete = function () {
          var serviceObj = _.find($scope.services, { title: $state.tab });
          if (!serviceObj) return;
          var service = $injector.get(serviceObj.service);
          var ids = _(serviceObj.data)
            .filter({ checked: true})
            .pluck('id')
            .value();
          service.delete(ids).then(function (resp) {
            serviceObj.data = _.filter(serviceObj.data, function (obj) {
              return !obj.checked;
            });
            resetCheckBoxes();
          });
        };

        $scope.changeTab = function (obj) {
          $state.tab = obj.title;
          $state.save();
          resetCheckBoxes();
        };

        $scope.$watch('advancedFilter', function (filter) {
          getData(filter);
        });

      }
    };
  });
});
