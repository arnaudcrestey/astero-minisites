const auth = require('../auth');

jest.mock('../../config/supabase', () => {
  const supabase = {
    auth: {
      getUser: jest.fn(),
    },
  };
  return { supabase };
});
const { supabase } = require('../../config/supabase');

describe('auth middleware', () => {
  afterEach(() => jest.clearAllMocks());

  it('calls next with valid token', async () => {
    supabase.auth.getUser.mockResolvedValue({ data: { user: { id: '1' } } });
    const req = { headers: { authorization: 'Bearer token' } };
    const res = { status: jest.fn(() => res), json: jest.fn() };
    const next = jest.fn();
    await auth(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(req.user).toEqual({ id: '1' });
  });

  it('returns 401 with invalid token', async () => {
    supabase.auth.getUser.mockResolvedValue({ error: 'bad' });
    const req = { headers: { authorization: 'Bearer bad' } };
    const res = { status: jest.fn(() => res), json: jest.fn() };
    const next = jest.fn();
    await auth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });
});
