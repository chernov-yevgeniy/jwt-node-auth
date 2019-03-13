const jwt = require('jsonwebtoken');

module.exports = {
  validateToken: (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    let result;
    if (authorizationHeaader) {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
          if (err) {
            return res.json({
              success: false,
              message: 'Token is not valid'
            });
          } else {
            req.decoded = decoded;
            next();
          }
        });
      } catch (err) {
        // Throw an error just in case anything goes wrong with verification
        throw new Error(err);
      }
    } else {
      result = { 
        error: 'Authentication error. Token required.',
        status: 401
      };
      res.status(401).send(result);
    }
  }
};