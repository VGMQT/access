const AccessSelect = () => {
  const activeClassnameString = 'list-is-open';
  const checkedInputString = 'checked';
  const accessSelects = document.getElementsByClassName('access-select');

  for (let i = 0; i < accessSelects.length; i++) {
    const thisAccessSelect = accessSelects[i];
    const thisChosenOption = thisAccessSelect.querySelector('.access-select__chosen-option');
    const theseInputs = thisAccessSelect.getElementsByClassName('access-select__input');

    // For a select with multiple options
    const thisChosenOptionRemembered = thisChosenOption.innerHTML;
    const multipleOptionsArray = [];

    for (let j = 0; j < theseInputs.length; j++) {
      const specificInput = theseInputs[j];

      document.addEventListener('click', function(e) {
        const isClickedInsideAccessSelect = thisAccessSelect.contains(e.target);
        const isClickedInsideChosenOption = thisChosenOption.contains(e.target);
        const isClickedInsideInput = specificInput.contains(e.target);

        if (isClickedInsideChosenOption) {
          if (!thisChosenOption.classList.contains(activeClassnameString)) {
            thisChosenOption.classList.add(activeClassnameString);
          } else {
            thisChosenOption.classList.remove(activeClassnameString);
          };
        };
  
        if (!isClickedInsideAccessSelect) {
          thisChosenOption.classList.remove(activeClassnameString);
        };

        // Additional conditions for a select with multiple options
        if (thisAccessSelect.classList.contains('access-select_multiple')) {
          if (isClickedInsideInput) {
            if (specificInput.checked) {
              specificInput.classList.add(checkedInputString);
              if (!multipleOptionsArray.includes(specificInput.value)) {
                multipleOptionsArray.push(specificInput.value);
                thisChosenOption.innerHTML = multipleOptionsArray.join(' ');
              };
            } else {
              specificInput.classList.remove(checkedInputString);
              multipleOptionsArray.splice(multipleOptionsArray.indexOf(specificInput.value), 1);

              if (multipleOptionsArray.length) {
                thisChosenOption.innerHTML = multipleOptionsArray.join(' ');
              } else {
                thisChosenOption.innerHTML = thisChosenOptionRemembered;
              };
            };
          };
        } else { // For a select with single option
          if (specificInput.checked) {
            specificInput.classList.add(checkedInputString);
            thisChosenOption.innerHTML = specificInput.value;
          } else {
            specificInput.classList.remove(checkedInputString);
          };
        };
      });
  
      specificInput.addEventListener('focus', function() {
        thisChosenOption.classList.add(activeClassnameString);
      });

      specificInput.addEventListener('keydown', function(e) {
        if (e.keyCode === 9) {
          thisChosenOption.classList.remove(activeClassnameString);
        };
      });
    };
  };
};