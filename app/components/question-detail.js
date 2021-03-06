import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key,params[key]);
        }
      });
      this.sendAction('updateQuestion', question);
    },

    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },

    deleteAnswer(answer, question) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer, question);
      }
    },

    thumbsUp(answer) {
      this.sendAction('thumbsUp', answer);
    },

    thumbsDown(answer) {
      this.sendAction('thumbsDown', answer);
    }
  }
});
