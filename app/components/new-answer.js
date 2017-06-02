import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    showAnswerForm() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question'),
        thumbsUp: 0,
        thumbsDown: 0
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
