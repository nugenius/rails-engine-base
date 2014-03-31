// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require handlebars
//= require jquery_ujs
//= require twitter/bootstrap
//= require ember
//= require ember-data
//= require select2
//= require snap
//= require atlas/bootstrap-switch
//= require atlas/spin
//= require bootstrap-datetimepicker/core
//= require_self
//= require ./atlas

// for more details see: http://emberjs.com/guides/application/
Atlas = Ember.Application.create({LOG_ACTIVE_GENERATION: true,
LOG_VIEW_LOOKUPS: true, 
      Resolver: Ember.DefaultResolver.extend({
          resolveTemplate: function(parsedName) {
            parsedName.fullNameWithoutType = "atlas/" + parsedName.fullNameWithoutType;
            return this._super(parsedName);
          }
      })});

//= require_tree .
