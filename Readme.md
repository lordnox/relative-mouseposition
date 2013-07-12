
# relative-mouseposition

  Returns the relative mouseposition of an element

## Installation

  Install with [component(1)](http://component.io):

    $ component install lordnox/relative-mouseposition

## API

  Usable as Element or Attribute, you need to make sure that the relative parent element
  has a `position` other than `static`

  ```HTML
  <div ng-app="myApp" ng-controller="myCtrl">
    <span relative-mouseposition="position"></span>
    <relative-mouseposition position="position"></relative-mouseposition>
  </div>
  ```

  ```javascript
  var myApp = angular('myApp', ['relativeMouseposition']); // add a dependency
  myApp.controller('myCtrl', ['$scope', function myCrtl($scope) {
    scope.position = {}; // this will contain the position
  }]);
  ```

### Demo.html

  For a simple working example just clone this repositiory and start the demo.html in your browser.


## ToDo
  - [ ] Make it that the element triggers an event when a change occours
  - [ ] Learn more about how github really works... and Markdown...

## License

  MIT
  The "Have-fun-with-this-code-but-you-are-responsible-for-everything-you-do-with-it"-Licence
