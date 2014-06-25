limitTextLength
===============

jQuery dependant function to limit the length of a text string inside a dom element. Doesn't trim words. It inserts "..." after the max characters and provides callbacks for when the mouse hovers over them and when the mouse leaves. Default behaviour is to replace the "..." with the remainder of the text when the mouse hovers, and get back to the original state when the mouse leaves.


Usage
-----

```javascript
limitTextLength({
  element: jQuery("selector"), //element is necessary. Can be a jQuery element, dom node or jQuery selector
  maxLength: 25 //Max string length (not including ...).
});
```


Optional parameters:

enter: Callback function when the mouse enters the span containing the "...". The callback "this" is set to the span, and gets passed the trimmed text and the original text as first and second parameters.

leave: Same as enter but triggered on mouseleave

class: CSS class for custom styling the span. Empty by default.

css: An object containing CSS directives to be added to the span.

Working example:
http://jsfiddle.net/K8KgR/4/
