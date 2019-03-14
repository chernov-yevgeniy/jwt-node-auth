const users = require('./users');
const auth = require('./auth');

module.exports = (router) => {
  users(router);
  auth(router);
  return router;
};