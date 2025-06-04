const { getUserRole, checkRole } = require('../authService');

jest.mock('../../config/supabase', () => {
  const supabase = {
    from: jest.fn(() => supabase),
    select: jest.fn(() => supabase),
    eq: jest.fn(() => supabase),
    single: jest.fn()
  };
  return { supabase };
});
const { supabase } = require('../../config/supabase');

describe('authService', () => {
  afterEach(() => jest.clearAllMocks());

  it('returns user role', async () => {
    supabase.single.mockResolvedValue({ data: { role: 'admin' } });
    const role = await getUserRole('1');
    expect(role).toBe('admin');
  });

  it('checkRole verifies allowed roles', () => {
    expect(checkRole('admin', ['admin'])).toBe(true);
    expect(checkRole('user', ['admin'])).toBe(false);
  });
});
