const { setContacts, setCommunications } = require('../actions/crmActions');
const { default: reducer } = require('./crmReducer');

describe('crm reducer', () => {
  it('handles the SET_CONTACTS action', () => {
    const state = [];
    const action = setContacts([
      { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
      { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' },
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual([
      { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
      { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' },
    ]);
  });

  it('handles the SET_COMMUNICATIONS action', () => {
    const state = [];
    const action = setCommunications([
      { contact: 12345,
        contacted: [{
          date: 'August 15, 2020',
          method: 'LinkedIn',
          notes: 'sent a message asking for informational interview',
          nextSteps: 'wait for response'
        }]
      }]);

    const newState = reducer(state, action);

    expect(newState).toEqual([
      { contact: 12345,
        contacted: [{
          date: 'August 15, 2020',
          method: 'LinkedIn',
          notes: 'sent a message asking for informational interview',
          nextSteps: 'wait for response'
        }]
      }]);
  });
});
