
# relative-mouseposition

  Returns the relative mouseposition of an element

## Installation

  Install with [component(1)](http://component.io):

    $ component install lordnox/relative-mouseposition

## API

  Usable as Element or Attribute, you need to make sure that the relative parent element
  has a `state` other than `static`

  ```HTML
  <div ng-app="myApp" ng-controller="myCtrl">
    <span relative-mouseposition="state"></span>
    <relative-mouseposition state="state"></relative-mouseposition>
    <relative-mouseposition event="'myEvent'"></relative-mouseposition>
  </div>
  ```

  When you `var rmp = require('relative-mouseposition');` you will get the angular-modules name as
  a return value `rmp === 'relativeMouseposition'`.

  ```javascript
  var dependencies = [
    require('relative-mouseposition')
  ];
  var myApp = angular('myApp', dependencies); // add a dependency
  myApp.controller('myCtrl', ['$scope', function myCrtl($scope) {
    scope.state = {}; // this will contain the state
    scope.$on('myEvent', function(event, state) {
      scope.state = state;
    })
  }]);
  ```

### Demo.html

  For a simple working example just clone this repositiory and start the demo.html in your browser.
  You will actually need to do a `component build` before it will work.

### Evented

  It's a little more code but you are able to use events and not have to
  use `scope.$watch('state', function(){})` for the same feature.

## ToDo
  - [X] Make it that the element triggers an event when a change occours
  - [ ] Learn more about how github really works... and Markdown...

## License

  MIT
  The "Have-fun-with-this-code-but-you-are-responsible-for-everything-you-do-with-it"-Licence
