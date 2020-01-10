(() => {
  const accessSelect = (
    selectClassnameString = 'access-select',
    chosenOptionClass = '.access-select__chosen-option',
    inputClassnameString = 'access-select__input',
    activeClassnameString = 'list-is-open'
  ) => {
    const accessSelects = document.getElementsByClassName(selectClassnameString);

    for (let i = 0; i < accessSelects.length; i++) {
      const thisAccessSelect = accessSelects[i];
      const thisChosenOption = thisAccessSelect.querySelector(chosenOptionClass);
      const theseInputs = thisAccessSelect.getElementsByClassName(inputClassnameString);

      for (let j = 0; j < theseInputs.length; j++) {
        const specificInput = theseInputs[j];

        document.addEventListener('click', function(e) {
          const isClickedInsideAccessSelect = thisAccessSelect.contains(e.target);
          const isClickedInsideChosenOption = thisChosenOption.contains(e.target);

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

          if (specificInput.checked) {
            thisChosenOption.innerHTML = specificInput.value;
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

  accessSelect();
})();