var $ = require('jquery');
require('angularjs');

var dependencies  = [
];

var app = angular.module('relativeMouseposition', dependencies);

var baseDirectiveDefinitionObject = {
  restrict: 'A',
  replace: true,
  scope: { position: '=relativeMouseposition' },
  template: '<div class="relative-mouseposition-anchor" ng-mousemove="hover($event)" ng-mouseover="position.hover=true" ng-mouseleave="position.hover=false"></div>',
  link: function(scope, element) {
    scope.hover = function(event) {
      var offset            = $(element).offset();
      scope.position.top    = event.pageY - offset.top;
      scope.position.left   = event.pageX - offset.left;
    };
  }
};

app.directive('relativeMouseposition', [function() {
  return angular.copy(baseDirectiveDefinitionObject);
}]);

app.directive('relativeMouseposition', [function() {
  var directiveDefinitionObject       = angular.copy(baseDirectiveDefinitionObject)
  directiveDefinitionObject.restrict  = 'E';
  directiveDefinitionObject.scope     = { position: '=' }
  return directiveDefinitionObject;
}]);
