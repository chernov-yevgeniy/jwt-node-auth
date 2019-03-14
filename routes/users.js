const controller = require('../controllers/UsersController');
const validateToken = require('../utils').validateToken;

module.exports = (router) => {
    router.route('/users')
        .get(validateToken, controller.getAll);

};