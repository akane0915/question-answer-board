import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm: function() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes') ? this.get('notes') : "None"
      }
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
