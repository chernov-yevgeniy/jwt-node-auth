const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');


module.exports = {
  register: (req, res) => {
    let result = {};
    let status = 201;
      const { name, password } = req.body;
      const user = new User({ name, password });
      user.save((err, user) => {
        if (!err) {
          result.status = status;
          result.result = user;
        } else {
          status = 500;
          result.status = status;
          result.error = err;
        }
        res.status(status).send(result);
      });
  },
  login: (req, res) => {
    const { name, password } = req.body;
    let result = {};
    let status = 200;
    
    User.findOne({name}, (err, user) => {
      if (!err && user) {
        bcrypt.compare(password, user.password).then(match => {
          if (match) {
            status = 200;
            const payload = { user: user.name };
            const options = { expiresIn: "1d"};
            const secret = process.env.JWT_SECRET;
            const token = jwt.sign(payload, secret, options);

            result.token = token;
            result.status = status;
            result.result = user;
          } else {
            status = 401;
            result.status = status;
            result.error = `Authentication error`;
          }
          res.status(status).send(result);
        }).catch(err => {
          status = 500;
          result.status = status;
          result.error = err;
          res.status(status).send(result);
        });
      } else {
        status = 404;
        result.status = status;
        result.error = err;
        res.status(status).send(result);
      }
    });
  }
}