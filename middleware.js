// middleware.js

function isAdmin(user) {
    return user.role === 'Admin';
  }
  
  function isHR(user) {
    return user.department === 'HR';
  }
  
  function isFinanceManagerWithExperience(user) {
    return user.department === 'Finance' && user.role === 'Manager' && user.seniority >= 5;
  }
  
  function hasITClearance(user) {
    return user.department === 'IT' && user.clearance >= 2;
  }
  
  function isLegalDirector(user) {
    return user.department === 'Legal' && user.role === 'Director' && user.clearance === 3;
  }
  
  function isOpsStaffWithLimitedService(user) {
    return user.department === 'Operations' && user.role === 'Staff' && user.clearance === 1 && user.seniority < 3;
  }
  
  function isExecutiveWithHighClearance(user) {
    return (user.role === 'Manager' || user.role === 'Director') && user.clearance === 3 && user.seniority >= 7;
  }
  
  // Middleware to enforce access control
  function authorize(policy) {
    return (req, res, next) => {
      const user = req.user; // Assume user is already attached to req object
  
      if (policy(user)) {
        return next();
      } else {
        res.status(403).json({ message: 'Access denied' });
      }
    };
  }
  
  module.exports = {
    isAdmin,
    isHR,
    isFinanceManagerWithExperience,
    hasITClearance,
    isLegalDirector,
    isOpsStaffWithLimitedService,
    isExecutiveWithHighClearance,
    authorize
  };
  