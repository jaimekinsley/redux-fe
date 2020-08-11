const { setContacts, SET_CONTACTS, setCommunications, SET_COMMUNICATIONS } = require('./crmActions');

describe('crm actions', () => {
  it('creates a SET_CONTACTS action', () => {
    const action = setContacts([
      { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
      { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' },
    ]);

    expect(action).toEqual({
      type: SET_CONTACTS,
      payload: [
        { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
        { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' },
      ]
    });
  });

  it('creates a SET_COMMUNICATIONS action', () => {
    const action = setCommunications([
      { contact: 12345,
        contacted: [{
          date: 'August 15, 2020',
          method: 'LinkedIn',
          notes: 'sent a message asking for informational interview',
          nextSteps: 'wait for response'
        }]
      }]);

    expect(action).toEqual({
      type: SET_COMMUNICATIONS,
      payload: [
        { contact: 12345,
          contacted: [{
            date: 'August 15, 2020',
            method: 'LinkedIn',
            notes: 'sent a message asking for informational interview',
            nextSteps: 'wait for response'
          }]
        }]
    });
  });
});
