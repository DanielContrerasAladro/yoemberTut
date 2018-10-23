//import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  //email: '',
	//responseMessage: '',

	headerMessage: 'Comming Soon',

	isValid: match('model.email', /^.+@.+\..+$/),

  isDisabled: not('isValid'),

/*
  actualEmailAddress: computed('emailAddress', function() {
    // console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: observer('emailAddress', function() {
    //console.log('observer is called', this.get('emailAddress'));
  }),


		actions: {

    saveInvitation() {
      alert(`TO: ${this.get('emailAddress')}
			MESSAGE: ${this.get('message')}`);

			const email = this.get('emailAddress');

			const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then(() => {
				this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
				this.set('emailAddress', '');
			});


    }
  }
	*/
});
