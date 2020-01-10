"use strict";

var AccessibleEssentials = function () {
  return {
    AccessibleSelect: function AccessibleSelect() {
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
    }
  };
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1zZWxlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBBY2Nlc3NpYmxlRXNzZW50aWFscyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBBY2Nlc3NpYmxlU2VsZWN0OiBmdW5jdGlvbiBBY2Nlc3NpYmxlU2VsZWN0KCkge1xuICAgICAgdmFyIGFjdGl2ZUNsYXNzbmFtZVN0cmluZyA9ICdsaXN0LWlzLW9wZW4nO1xuICAgICAgdmFyIGFjY2Vzc1NlbGVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2Nlc3Mtc2VsZWN0Jyk7XG5cbiAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGkpIHtcbiAgICAgICAgdmFyIHRoaXNBY2Nlc3NTZWxlY3QgPSBhY2Nlc3NTZWxlY3RzW2ldO1xuICAgICAgICB2YXIgdGhpc0Nob3Nlbk9wdGlvbiA9IHRoaXNBY2Nlc3NTZWxlY3QucXVlcnlTZWxlY3RvcignLmFjY2Vzcy1zZWxlY3RfX2Nob3Nlbi1vcHRpb24nKTtcbiAgICAgICAgdmFyIHRoZXNlSW5wdXRzID0gdGhpc0FjY2Vzc1NlbGVjdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2Nlc3Mtc2VsZWN0X19pbnB1dCcpO1xuXG4gICAgICAgIHZhciBfbG9vcDIgPSBmdW5jdGlvbiBfbG9vcDIoaikge1xuICAgICAgICAgIHZhciBzcGVjaWZpY0lucHV0ID0gdGhlc2VJbnB1dHNbal07XG4gICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGlzQ2xpY2tlZEluc2lkZUFjY2Vzc1NlbGVjdCA9IHRoaXNBY2Nlc3NTZWxlY3QuY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIGlzQ2xpY2tlZEluc2lkZUNob3Nlbk9wdGlvbiA9IHRoaXNDaG9zZW5PcHRpb24uY29udGFpbnMoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICBpZiAoaXNDbGlja2VkSW5zaWRlQ2hvc2VuT3B0aW9uKSB7XG4gICAgICAgICAgICAgIGlmICghdGhpc0Nob3Nlbk9wdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQ2xhc3NuYW1lU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgIHRoaXNDaG9zZW5PcHRpb24uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc25hbWVTdHJpbmcpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNDaG9zZW5PcHRpb24uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc25hbWVTdHJpbmcpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIGlmICghaXNDbGlja2VkSW5zaWRlQWNjZXNzU2VsZWN0KSB7XG4gICAgICAgICAgICAgIHRoaXNDaG9zZW5PcHRpb24uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc25hbWVTdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIGlmIChzcGVjaWZpY0lucHV0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgdGhpc0Nob3Nlbk9wdGlvbi5pbm5lckhUTUwgPSBzcGVjaWZpY0lucHV0LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc3BlY2lmaWNJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXNDaG9zZW5PcHRpb24uY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc25hbWVTdHJpbmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNwZWNpZmljSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgICAgICAgIHRoaXNDaG9zZW5PcHRpb24uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc25hbWVTdHJpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGVzZUlucHV0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIF9sb29wMihqKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWNjZXNzU2VsZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICAgIH1cblxuICAgICAgO1xuICAgIH1cbiAgfTtcbn0oKTsiXX0=
