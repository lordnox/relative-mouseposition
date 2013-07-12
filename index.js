var $ = require('jquery');
require('angularjs');

var name = 'relativeMouseposition';

var dependencies  = [
];

var app = angular.module(name, dependencies);

var baseDirectiveDefinitionObject = {
  restrict: 'A',
  replace: true,
  scope: { state: '=' + name, event: '@' },
  template: '<div class="relative-mouseposition-anchor" ng-mousemove="move($event)" ng-mouseover="hover(true)" ng-mouseleave="hover(false)"></div>',
  link: function(scope, element) {
    var state = {
          hover : false
        , left  : 0
        , top   : 0
        }
      , broadcast = function() {
          // only set this if the model is "assignable"
          // would like to have a better way of testing this
          if(scope.state !== undefined) {
            scope.state = {}
            scope.state.hover = state.hover;
            scope.state.left  = state.left;
            scope.state.top   = state.top;
          }
          // broadcast this to the parent, use the provided event-label if possible
          var event = String(scope.event || 'mouse-state');
          scope.$parent.$broadcast(event, state);
        }
      ;
    scope.hover = function(hoverState) {
      state.hover = hoverState;
      broadcast();
    };
    scope.move = function(event) {
      var offset = $(element).offset();
      state.top  = event.pageY - offset.top;
      state.left = event.pageX - offset.left;
      broadcast();
    };
  }
};

app.directive(name, [function() {
  return angular.copy(baseDirectiveDefinitionObject);
}]);

app.directive(name, [function() {
  var directiveDefinitionObject         = angular.copy(baseDirectiveDefinitionObject);
  directiveDefinitionObject.restrict    = 'E';
  directiveDefinitionObject.scope.state = '=';
  return directiveDefinitionObject;
}]);

module.exports = name;