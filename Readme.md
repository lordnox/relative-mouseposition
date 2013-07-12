
# relative-mouseposition

  Returns the relative mouseposition of an element

## Installation

  Install with [component(1)](http://component.io):

    $ component install lordnox/relative-mouseposition

## API

  Usable as Element or Attribute

  ```HTML
  <span relative-mouseposition="position"></span>
  <relative-mouseposition position="position"></relative-mouseposition>
  ```

  ```javascript
    var myCtrl = ['$scope', function myCrtl($scope) {
      scope.position = {}; // this will contain the position
    }];
  ```

## ToDo
  - [ ] Make it that the element triggers an event when a change occours

## License

  MIT
