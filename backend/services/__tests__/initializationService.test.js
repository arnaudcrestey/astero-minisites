const { initializeUser } = require('../initializationService');
const journalService = require('../journalService');

jest.mock('../journalService', () => ({
  generateDailyJournal: jest.fn(() => Promise.resolve({ id: 1 }))
}));

describe('initializeUser', () => {
  it('calls generateDailyJournal with welcome option', async () => {
    await initializeUser('user123');
    expect(journalService.generateDailyJournal).toHaveBeenCalledWith('user123', { welcome: true });
  });
});
