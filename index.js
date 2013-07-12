var $ = require('jquery');
require('angularjs');

var name = 'relativeMouseposition';

var dependencies  = [
];

var app = angular.module(name, dependencies);

var baseDirectiveDefinitionObject = {
  restrict: 'A',
  replace: true,
  scope: { position: '=' + name },
  template: '<div class="relative-mouseposition-anchor" ng-mousemove="hover($event)" ng-mouseover="position.hover=true" ng-mouseleave="position.hover=false"></div>',
  link: function(scope, element) {
    scope.hover = function(event) {
      var offset            = $(element).offset();
      scope.position.top    = event.pageY - offset.top;
      scope.position.left   = event.pageX - offset.left;
    };
  }
};

app.directive(name, [function() {
  return angular.copy(baseDirectiveDefinitionObject);
}]);

app.directive(name, [function() {
  var directiveDefinitionObject       = angular.copy(baseDirectiveDefinitionObject)
  directiveDefinitionObject.restrict  = 'E';
  directiveDefinitionObject.scope     = { position: '=' }
  return directiveDefinitionObject;
}]);

module.exports = name;