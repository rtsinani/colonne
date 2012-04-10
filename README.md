## Colonne

Colonne extends `Backbone.History` by exposing two extra, and often necessary properties: `path` and `params`.

Ported from [sammy.js](https://github.com/quirkey/sammy).


### Usage

Just add the script after `backbone.js`, and the functionality should be ready to use.

Let's say, you navigate to a URL fragment `/products/search?names=apple&names=nectarine&page=1` you can then call:

```js
// URL fragment: /products/search?names=apple&names=nectarine&page=1

Backbone.history.path   			// 'products/search'
Backbone.history.params['names']    // ['apple', 'nectarine']
Backbone.history.params['page']		// '1'

```

#### Navigate With

You can also use `Backbone.history.navigateWith` to go to a path with a query string.

```js
Backbone.history.navigateWith('/products/search', { names: ['apple', 'nectarine'], page: 1 }, {trigger: true});
Backbone.history.fragment   // 'products/search?names=apple&names=nectarine&page=1');
```


### Tests

Colonne passes all Backbone tests for the router, copied at `test/router.js`. The new functionality is tested at the end of the same file.


### Dependencies

`Underscore 1.3.1` `Backbone 0.9.2`


### License

Colonne is covered by the MIT License