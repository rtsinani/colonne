(function () {
	
	var Colonne = window.Colonne = {};
	
	Colonne.VERSION = '0.0.3';
	
	var _superLoadUrl = Backbone.History.prototype.loadUrl,
		_decode = function( str ) { return decodeURIComponent((str || '').replace(/\+/g, ' ')); };
	
	/*
	 * Extends Backbone.History.loadUrl by setting the path and params
	 */
	Colonne.History = _.extend(Backbone.History.prototype, {
		
		path: '',
		
		params: {},
		
		loadUrl: function () {
			_superLoadUrl.apply(this, arguments);
			this._setPath();
			this._setParams();
		},
		
		_setPath: function () {
			this.path = this.fragment ? this.fragment.split('?')[0] : '';
		},
		
		_setParams: function () {
			var params = {},
				parts = this.fragment ? this.fragment.split('?') : [];
			if (parts.length > 1) {
				var tuples = parts[1].split('&'),
					pairs;
				for (var i = 0, tuple; tuple = tuples[i]; i++) {
					pairs = tuple.split('=');
					params = this._parseParamTuple(params, _decode(pairs[0]), _decode(pairs[1] || ""));
				}
			}
			this.params = params;
		},
		
		_parseParamTuple: function(params, key, value) {
			if (typeof params[key] === 'undefined') {
				params[key] = value;
			} else {
				if (_.isArray(params[key])) {
					params[key].push(value);
				} else {
					params[key] = [params[key], value];
				}
			}
			return params;
		},
		
		/*
		 * Navigates to a given path with a params objects, that gets translated to a query string
		 */
		navigateWith: function (path, params, options) {
			this.navigate( this.pathWith(path, params), options );
		},
		
		/*
		 * Builds the path to navigate to from a given path with a params objects, that gets translated to a query string
		 */
		pathWith: function (path, params) {
			if (!params) return path;
			var pathTo = [],
				value;
			for (var key in params) {
				value = params[key];
				if (_.isArray(value)) {
					pathTo = _.map(value, function (val) { return [key, val].join('='); });
				} else {
					pathTo.push( [key, value].join('=') );
				}
			}
			return [path, pathTo.join('&')].join('?');
		}
		
	});
	
	
	
	
})();