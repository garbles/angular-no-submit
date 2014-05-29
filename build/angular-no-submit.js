(function(window, angular, undefined) {'use strict';

angular.module('gs.no-submit', [])
.directive('noSubmit', function () {
  function submitInput (el, attrs) {
    return el.tagName === 'INPUT' && attrs.type === 'submit';
  }

  function button (el) {
    return el.tagName === 'BUTTON';
  }

  return function (scope, el, attrs) {
    if (submitInput(el[0], attrs) || button(el[0])) {
      el.bind('click', function (event) {
        event.preventDefault();
      });
    }
  };
});

})(window, window.angular);
