import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    updateQuestion(question) {
      question.save();
      this.transitionTo('question');
    },

  }
});
