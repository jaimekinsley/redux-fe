const { getContacts, getContactsLoading, getCommunications } = require('./crmSelectors');

describe('crm selectors', () => {
  it('selects the list of contacts from state', () => {
    const state = {
      loading: false,
      contacts: [
        { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
        { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' },
      ],
      communications: []
    };

    const contacts = getContacts(state);

    expect(contacts).toEqual([
      { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
      { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' }
    ]);
  });

  it('selects the loading state', () => {
    const state = {
      loading: false,
      contacts: [
        { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
        { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' }
      ],
      communications: []
    };

    const loading = getContactsLoading(state);

    expect (loading).toEqual(false);
  });
});
