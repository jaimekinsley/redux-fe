const { getContacts } = require('./crmSelectors');

describe('crm selectors', () => {
  it('selects the list of contacts from state', () => {
    const state = [
      { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
      { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' },
    ];

    const contacts = getContacts(state);

    expect(contacts).toEqual([
      { name: 'Jaime', communicationMedium: 'phone', imageUrl: 'http:jaime.com' },
      { name: 'Sam', communicationMedium: 'email', imageUrl: 'http:sam.com' }
    ]);
  });
});
