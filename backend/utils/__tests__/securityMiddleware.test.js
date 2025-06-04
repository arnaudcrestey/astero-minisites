const securityMiddleware = require('../securityMiddleware');

jest.mock('../../services/authService', () => ({
  getUserRole: jest.fn()
}));
const { getUserRole } = require('../../services/authService');

describe('securityMiddleware', () => {
  afterEach(() => jest.clearAllMocks());

  it('calls next when role allowed', async () => {
    getUserRole.mockResolvedValue('admin');
    const req = { user: { id: '1' } };
    const res = { status: jest.fn(() => res), json: jest.fn() };
    const next = jest.fn();
    await securityMiddleware(['admin'])(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(req.userRole).toBe('admin');
  });

  it('returns 403 when role not allowed', async () => {
    getUserRole.mockResolvedValue('user');
    const req = { user: { id: '1' } };
    const res = { status: jest.fn(() => res), json: jest.fn() };
    const next = jest.fn();
    await securityMiddleware(['admin'])(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });

  it('returns 500 on error', async () => {
    getUserRole.mockRejectedValue(new Error('db'));
    const req = { user: { id: '1' } };
    const res = { status: jest.fn(() => res), json: jest.fn() };
    const next = jest.fn();
    await securityMiddleware(['admin'])(req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(next).not.toHaveBeenCalled();
  });
});
