const { generatePersonalEnergyMessage } = require('../openaiService');

jest.mock('openai', () => {
  return {
    Configuration: jest.fn(),
    OpenAIApi: jest.fn().mockImplementation(() => ({
      createChatCompletion: jest.fn(() =>
        Promise.resolve({ data: { choices: [{ message: { content: 'Hi' } }] } })
      ),
    })),
  };
});

jest.mock('../../config/supabase', () => {
  const supabase = {
    from: jest.fn(() => supabase),
    insert: jest.fn(() => supabase),
  };
  return { supabase };
});
const { supabase } = require('../../config/supabase');

describe('generatePersonalEnergyMessage', () => {
  afterEach(() => jest.clearAllMocks());

  it('generates message and stores in db', async () => {
    const message = await generatePersonalEnergyMessage('Jane', '1990-01-01');
    expect(message).toBe('Hi');
    expect(supabase.from).toHaveBeenCalledWith('energy_messages');
  });

  it('throws when missing first name', async () => {
    await expect(generatePersonalEnergyMessage('', '1990-01-01')).rejects.toThrow('firstName_required');
  });

  it('throws for invalid date', async () => {
    await expect(generatePersonalEnergyMessage('Jane', '01-01-1990')).rejects.toThrow('invalid_dob');
  });
});
