# angular-no-submit

A directive that prevents a button from submitting a form.
Also prevents other events from firing.

### Installing

`bower install angular-no-submit`

### Use

Include `gs.no-submit` in your app

```javascripts
angular.module('app', ['gs.no-submit']);
```

Just add the 'no-submit' attribute to a `button` or `input[type='submit']`

```html
<button no-submit>Do something</button>
<input type='submit' value='Do something' no-submit/>
```
