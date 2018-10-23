import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {

    saveInvitation(newInvitation) {
      newInvitation.save().then(() => {
				this.controller.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
				this.controller.set('emailAddress', '');
			});
    },
		
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});