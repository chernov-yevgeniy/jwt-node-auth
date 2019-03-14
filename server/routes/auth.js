const controller = require('../controllers/AuthController');

module.exports = (router) => {
    router.route('/register')
        .post(controller.register);
    router.route('/login')
        .post(controller.login);
};