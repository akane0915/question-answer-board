import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    showUpdateQuestionForm: function() {
      this.set('updateThisQuestion', true);
    },

    updateQuestion(question) {
      var params = {
        content: this.get('content'),
        notes: this.get('notes')
      }
      this.set('updateThisQuestion', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
