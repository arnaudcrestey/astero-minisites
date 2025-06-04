const adminAuth = require('../adminAuth');

jest.mock('../../config/supabase', () => {
  const supabase = {
    from: jest.fn(() => supabase),
    select: jest.fn(() => supabase),
    eq: jest.fn(() => supabase),
    single: jest.fn(),
  };
  return { supabase };
});
const { supabase } = require('../../config/supabase');

describe('adminAuth middleware', () => {
  afterEach(() => jest.clearAllMocks());

  it('calls next when user is admin', async () => {
    supabase.single.mockResolvedValue({ data: { role: 'admin' } });
    const req = { user: { id: '1' } };
    const res = { status: jest.fn(() => res), json: jest.fn() };
    const next = jest.fn();
    await adminAuth(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('returns 403 when user is not admin', async () => {
    supabase.single.mockResolvedValue({ data: { role: 'user' } });
    const req = { user: { id: '1' } };
    const res = { status: jest.fn(() => res), json: jest.fn() };
    const next = jest.fn();
    await adminAuth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });
});

