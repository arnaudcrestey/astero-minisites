const { getUserRole } = require('../services/authService');

/**
 * Generic role-based access control middleware.
 * @param {string[]} roles Allowed roles to access the route
 */
module.exports = function securityMiddleware(roles = []) {
  return async function(req, res, next) {
    try {
      const role = await getUserRole(req.user.id);
      if (!roles.length || roles.includes(role)) {
        req.userRole = role;
        return next();
      }
      return res.status(403).json({ error: 'forbidden' });
    } catch (e) {
      res.status(500).json({ error: 'role_check_error' });
    }
  };
};
