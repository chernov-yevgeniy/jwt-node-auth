const controller = require('../controllers/AuthController');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/register')
        .post(controller.register);
    router.route('/login')
        .post(controller.login);
};