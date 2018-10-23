import DS from 'ember-data';
import { match, and, gte } from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

	isValidEmail: match('email', /^.+@.+\..+$/),

	isMessageLongEnough: gte('message.length',5),

  isValid: and('isValidEmail', 'isMessageLongEnough')
});
