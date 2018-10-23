import Route from '@ember/routing/route';

export default Route.extend({
		model() {
    return this.store.createRecord('contact');
  },

	actions: {

    sendMessage(newContact) {
      newContact.save().then(() => {
				this.controller.set('responseMessage', true);
				setTimeout(()=>{
						this.transitionTo('admin.contacts')
				},1000);
			});			
    },
		
		willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }

      this.controller.set('responseMessage', false);
    }
  }		
});
