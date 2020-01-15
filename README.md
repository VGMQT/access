# AccEss: Accessible Essentials

### Content

**[What is this?](#what-is-this)**  
**[How it works](#how-it-works)**  
**[Roadmap](#roadmap)**  
**[License](#license)**

## What is this?

WORK IN PROGRESS!

_AccEss_ is a lightweight pack of accessible customizable elements for web development such as Select, Tabs, Checkboxes, etc. It built on HTML5 basic elements and behave itself the exact same way they do.

## How it works
1. Download (through `yarn`/`npm` or manually) and include:

* A `JavaScript` file

You can choose the one you need:

`AccessEssentials.js` contains all _AccEss_ elements;

In the `Separated` folder you can find every available _AccEss_ element and include them separately, if you want to use only some of them (or only one).

* A `CSS` file  
You can choose the one you need:

`AccessEssentials.basic.css` contains all _AccEss_ elements basic styles, that are necessary for `JavaScript` to work;

In the `Separated` folder you can find styles for every available _AccEss_ element and include them separately, if you want to use only some of elements (or only one).

`.styled.css` files have extra styles for elements, so they would look more attractive.

You need to add either `.basic.css` or `.styled.css` styles.

`.styled.css` files already have `.basic.css` styles inside.

2. Create a markup, that would look like this:
* For Select:
```
<div class="access-select">
  <div class="access-select__option access-select__chosen-option">
    <p>Choose an option</p>
  </div>
  <ul class="access-select__list">
    <li class="access-select__item">
      <input class="access-select__option access-select__input" id="option1" type="radio" name="Select (single option)" value="Option #1">
      <label class="access-select__option access-select__label" for="option1">Option #1</label>
    </li>
    <li class="access-select__item">
      <input class="access-select__option access-select__input" id="option2" type="radio" name="Select (single option)" value="Option #2">
      <label class="access-select__option access-select__label" for="option2">Option #2</label>
    </li>
    <li class="access-select__item">
      <input class="access-select__option access-select__input" id="option3" type="radio" name="Select (single option)" value="Option #3">
      <label class="access-select__option access-select__label" for="option3">Option #3</label>
    </li>
    <li class="access-select__item">
      <input class="access-select__option access-select__input" id="option4" type="radio" name="Select (single option)" value="Option #4">
      <label class="access-select__option access-select__label" for="option4">Option #4</label>
    </li>
    <li class="access-select__item">
      <input class="access-select__option access-select__input" id="option5" type="radio" name="Select (single option)" value="Option #5">
      <label class="access-select__option access-select__label" for="option5">Option #5</label>
    </li>
  </ul>
</div>
```
You can add some wrappers or change some things, but it is recommended to keep all classes and elements as is. You can check `dev` folder for source files to know what exactly you can or can not change. You can even change some `JavaScript` code and `CSS` styles to match your situation more, but do not forget about accessibility, the very thing why _AccEss_ exists.

3. Call the `AccessEssentials();` function or, if you downloaded and added specific elements files, call a dedicated function. For example, for Select it will be `AccessSelect();`.

4. Test your element with mouse clicks and `Tab` navigation.

## Roadmap
- Select (single option)
- Select (multiple options)
- Tabs
- Checkboxes
- Radio buttons
- TBD

## License

Copyright © 2020.

Licensed under the MIT license.
