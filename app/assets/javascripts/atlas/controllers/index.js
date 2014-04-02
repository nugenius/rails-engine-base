Atlas.IndexView = Em.View.extend({
  didInsertElement: function() {
    $('.tooltip-init').tooltip();
    $('.toggle-init').bootstrapSwitch();
    $('.toggle-boolean-init').bootstrapSwitch({
      boolean: true
    });
  }
})
Atlas.IndexController = Em.Controller.extend({
  form: {
    name: "test-form",
    version: "0",
    elements: {
      'test-form': {
        element_type: 'form',
        label: 'I am an awesome form',
        children: ['alephrow', 'row0', 'row1', 'row2']
      },
      'alephrow': {
        element_type: 'row',
        children: ['c1', 'c2']
      },
      'c1': {
        element_type: 'column',
        width: 6,
        children: ['image1']
      },
      'c2': {
        element_type: 'column',
        width: 6,
        children: ['link2']
      },
      'row0': {
        element_type: 'row',
        children: ['acol', 'bcol']
      },
      'acol': {
        element_type: 'column',
        width: 6,
        children: ['text_display1', 'modal1', 'modal2']
      },
      'bcol': {
        element_type: 'column',
        width: 6,
        children: ['html_display1', 'modal1', 'link1']
      },
      'row1': {
        element_type: 'row',
        children: ['numeric1', 'boolean1', 'tooltip1', 'tooltip2', 'text1']
      },
      'row2': {
        element_type: 'row',
        children: ['col1', 'col2']
      },
      'col1': {
        element_type: 'column',
        width: 6,
        children: ['row3', 'row4']
      },
      'col2': {
        width: 6,
        element_type: 'column',
        children: ['row5', 'row6']
      },
      'row3': {
        element_type: 'row',
        children: ['boolean2', 'boolean1']
      },
      'row4': {
        element_type: 'row',
        children: ['text2']
      },
      'row5': {
        element_type: 'row',
        children: ['text1']
      },
      'row6': {
        element_type: 'row',
        children: ['boolean1', 'boolean2']
      },
      'tooltip1': {
        element_type: 'tooltip',
        label: 'Left Tooltip',
        body: 'I am a tooltip',
        placement: 'left'
      },
      'tooltip2': {
        element_type: 'tooltip',
        label: 'Right Tooltip',
        body: 'I am another tooltip',
        placement: 'right'
      },
      'numeric1': {
        element_type: 'numeric',
        label: 'Numeric 1:',
        placeholder: 'Enter a Number'
      },
      'text_display1': {
        body: 'I am a text display. Put arbitrary text in here. but <b> html will be escaped </b>',
        element_type: 'text_display'
      },
      'html_display1': {
        body: '<p>I am an html display. </p><p>Put arbitrary text in here. but <b> html will not be escaped </b></p>',
        element_type: 'html_display'
      },
      'text1': {
        label: 'Text Field 1',
        placeholder: 'Placeholder for Text Field 1',
        element_type: 'text'
      },
      'text2': {
        label: 'text Field 2',
        placeholder: 'Placeholder for Text Field 2',
        element_type: 'text'
      },
      'boolean1': {
        label: "Boolean 1",
        element_type: 'boolean'
      },
      'boolean2': {
        label: "Boolean 2",
        element_type: 'boolean'
      },
      'modal1': {
        label: "Modal 1",
        title: "An ok modal",
        element_type: 'modal',
        children: ['text_display1']
      },
      'modal2': {
        label: "Modal 2",
        title: "What a sweet modal",
        element_type: 'modal',
        children: ['html_display1']
      },
      'image1': {
        src: "http://www.mtosmt.org/issues/mto.10.16.1/tymoczko_fig3a.gif",
        label: "This is an image of a hexatonic cycle",
        element_type: 'image'
      },
      'link1': {
        src: "http://emblemjs.com/syntax",
        label: "Emblem.js Syntax Tutorial",
        element_type: 'link'
      },
      'link2': {
        src: "http://www.mtosmt.org/",
        element_type: 'link',
        children: ['image1']
      }
    }
  }
});