## Colonne

Colonne extends `Backbone.History` by exposing two extra, and often necessary properties: `path` and `params`.

Ported from [sammy.js](https://github.com/quirkey/sammy).


### Usage

Just add the script after `backbone.js`, and the functionality should be ready to use.

Let's say, you navigate to a URL fragment `/products/search?names=apple&names=nectarine&page=1` you can then call:

```js
// URL fragment: /products/search?names=apple&names=nectarine&page=1

path  = Backbone.history.path   			// path  : 'products/search'
names = Backbone.history.params['names']    // names : ['apple', 'nectarine']
page  = Backbone.history.params['page']		// page  : '1'

```

### Tests

Colonne passes all Backbone tests for the router, copied at `test/router.js`. The new functionality is tested at the end of the same file.


### Dependencies

`Underscore 1.3.1`
`Backbone 0.9.2`


### License

Colonne is covered by the MIT License