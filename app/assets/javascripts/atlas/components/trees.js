Atlas.TreeRenderComponent = Ember.Component.extend({
  elements: {},
  content: {},
  name: "",
  dataTarget: function() {
    return "#"+this.get('name');
  }.property(),
  layoutName: function() {
    var element = this.get('elements')[this.get('name')] || {};
    this.set('content', element);
    return "form_element/"+(element.element_type || "form")
  }.property()
});