(function () {
	var Colonne = window.Colonne = {};
	
	Colonne.View = Backbone.View.extend({
		template	: _.template,
		templateId: '',
		
		render: function () {
			return this.renderTemplated();
		},
		
		renderTemplated: function () {
			if (this.model && this._setTemplateId()) {
					var tmpl = this._getTemplate();
					if (tmpl) this.$el.html( tmpl(this.model.toJSON()) );
			}
			return this;
		},
		
		_setTemplateId: function () {
			if (!this.el || !this.el.id) return false;
			this.templateId = [this.el.id, 'template'].join('-');
			return true;
		},
		
		_getTemplate: function () {
			if (Colonne.View.TemplateStore[this.templateId]) return Colonne.View.TemplateStore[this.templateId];
			var templateContainer = document.getElementById(this.templateId);
			if (templateContainer) {
				return Colonne.View.TemplateStore[this.templateId] = this.template( templateContainer.innerHTML );
			}
			return null;
		}
	});
	
	Colonne.View.TemplateStore = {};
	
})();