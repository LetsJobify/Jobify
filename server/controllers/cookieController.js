const db = require('../database/dbModel');

const cookieController = {};

// set a cookie on the response
cookieController.setCookie = (req, res, next) => {
  if (res.locals.isVerified) {
    res.cookie('success', true);
    return next();
  }
  return next();
};

module.exports = cookieController;
