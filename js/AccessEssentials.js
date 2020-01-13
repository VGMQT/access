;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.AccessEssentials = factory();
  }
}(this, function() {
"use strict";

var AccessEssentials = function AccessEssentials() {
  AccessSelect();
};
"use strict";

var AccessSelect = function AccessSelect() {
  var activeClassnameString = 'list-is-open';
  var accessSelects = document.getElementsByClassName('access-select');

  var _loop = function _loop(i) {
    var thisAccessSelect = accessSelects[i];
    var thisChosenOption = thisAccessSelect.querySelector('.access-select__chosen-option');
    var theseInputs = thisAccessSelect.getElementsByClassName('access-select__input');

    var _loop2 = function _loop2(j) {
      var specificInput = theseInputs[j];
      document.addEventListener('click', function (e) {
        var isClickedInsideAccessSelect = thisAccessSelect.contains(e.target);
        var isClickedInsideChosenOption = thisChosenOption.contains(e.target);

        if (isClickedInsideChosenOption) {
          if (!thisChosenOption.classList.contains(activeClassnameString)) {
            thisChosenOption.classList.add(activeClassnameString);
          } else {
            thisChosenOption.classList.remove(activeClassnameString);
          }

          ;
        }

        ;

        if (!isClickedInsideAccessSelect) {
          thisChosenOption.classList.remove(activeClassnameString);
        }

        ;

        if (specificInput.checked) {
          thisChosenOption.innerHTML = specificInput.value;
        }

        ;
      });
      specificInput.addEventListener('focus', function () {
        thisChosenOption.classList.add(activeClassnameString);
      });
      specificInput.addEventListener('keydown', function (e) {
        if (e.keyCode === 9) {
          thisChosenOption.classList.remove(activeClassnameString);
        }

        ;
      });
    };

    for (var j = 0; j < theseInputs.length; j++) {
      _loop2(j);
    }

    ;
  };

  for (var i = 0; i < accessSelects.length; i++) {
    _loop(i);
  }

  ;
};
return AccessEssentials;
}));
