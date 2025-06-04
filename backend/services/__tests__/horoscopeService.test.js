const { getDailyHoroscope } = require('../horoscopeService');
const fetch = require('node-fetch');

jest.mock('node-fetch', () => jest.fn());

jest.mock('../../config/supabase', () => {
  const supabase = {
    from: jest.fn(() => supabase),
    insert: jest.fn(() => supabase),
  };
  return { supabase };
});
const { supabase } = require('../../config/supabase');

describe('getDailyHoroscope', () => {
  afterEach(() => jest.clearAllMocks());

  it('calls horoscope API and stores result', async () => {
    fetch.mockResolvedValue({ json: () => Promise.resolve({ description: 'Great' }) });
    supabase.insert.mockResolvedValue({});
    const desc = await getDailyHoroscope('aries', '1990-01-01');
    expect(desc).toBe('Great');
    expect(fetch).toHaveBeenCalled();
    expect(supabase.from).toHaveBeenCalledWith('horoscopes');
  });

  it('throws for invalid date', async () => {
    await expect(getDailyHoroscope('aries', '01-01-1990')).rejects.toThrow('invalid_dob');
  });
});
