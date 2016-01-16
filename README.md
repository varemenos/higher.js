> higher.js

A library that helps you highlight elements on the screen (like the devtools inspector).

> This is currently a proof of concept and can be buggy, it also requires JQuery.
In the future these issues will be sorted out.

## API

### higher.highlight

This is a method that should be used as a callback in a JQuery mousemove event.

### higher.getPath

This is a method that wraps uniquePath to help you get a unique CSS selector for the clicked DOM element and should be used as a callback in a JQuery click event.

> Note that this method is part of the PoC and only logs out the unique CSS selector and it will be refactored in the future to provide meaningful functionality.

## Example

Combining the 2 methods provided you can get the "inspector" effect that most devtools provide:

```js
// highlight the element that's currently hovered with the mouse
$(document).on('mousemove', higher.highlight);
// logs out the unique css selector
// note: that you need to provide the third parameter of addEventListener (true) to make it execute in the capturing phase
document.addEventListener('click', higher.getPath, true);
```

## License

The MIT License
