const { setContacts, setCommunications, setContactsLoading, setCommunicationsLoading } = require('../actions/crmActions');
const { default: reducer } = require('./crmReducer');

describe('crm reducer', () => {
  it('handles the SET_CONTACTS action', () => {
    const state = {
      loading: false,
      contacts: [],
      communications: []
    };
    const action = setContacts([
      { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
      { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' }
    ]);

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      contacts: [
        { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
        { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' }
      ],
      communications: []
    });
  });

  it('handles the SET_CONTACTS_LOADING action', () => {
    const state = {
      loading: false,
      contacts: [],
      communications: []
    };
    const action = setContactsLoading();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: true,
      contacts: [],
      communications: []
    });
  });

  it('handles the SET_COMMUNICATIONS action', () => {
    const state = {
      loading: false,
      contacts: [],
      communications: []
    };
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

    expect(newState).toEqual({
      loading: false,
      contacts: [],
      communications: [
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

  it('handles the SET_COMMUNICATIONS_LOADING action', () => {
    const state = {
      loading: false,
      contacts: [],
      communications: []
    };
    const action = setCommunicationsLoading();
    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: true,
      contacts: [],
      communications: []
    });
  });
});
