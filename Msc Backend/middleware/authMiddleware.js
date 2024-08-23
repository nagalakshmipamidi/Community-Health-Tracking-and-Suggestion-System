const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Retrieve the token from cookies
  const token = req.cookies.token;
  console.log(token);
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'yourSecretToken'); // Replace with your secret
    req.user = decoded.user; // Attach the decoded user to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
