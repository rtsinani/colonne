(function () {
	
	var Colonne = window.Colonne = {};
	
	Colonne.VERSION = '0.0.1';
	
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
		}
		
		
	});
	
	
	
	
})();