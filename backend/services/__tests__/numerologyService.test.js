const { getNumerologyInfo } = require('../numerologyService');
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

describe('getNumerologyInfo', () => {
  afterEach(() => jest.clearAllMocks());

  it('calls numerology API and stores result', async () => {
    fetch.mockResolvedValue({ json: () => Promise.resolve({ life_path: 5 }) });
    supabase.insert.mockResolvedValue({});

    const result = await getNumerologyInfo('1990-01-01');

    expect(fetch).toHaveBeenCalledWith(
      'https://numerologyapi.com/api/v1/life-path?date_of_birth=1990-01-01',
      { headers: { 'X-Api-Key': undefined } }
    );
    expect(supabase.from).toHaveBeenCalledWith('numerology_results');
    expect(result).toEqual({ lifePath: 5 });
  });

  it('throws for invalid date', async () => {
    await expect(getNumerologyInfo('01-01-1990')).rejects.toThrow('invalid_dob');
  });
});
