const db = require('../database/dbModel');

const userController = {};

// Get user information based on username and password
userController.getUser = (req, res, next) => {
  const { id } = req.query.id;
  const allUser = `SELECT * FROM "user" WHERE __id=$1`;
  const allUserValue = [id];

  db.query(allUser, allUserValue)
    .then((data) => {
      res.locals.user = data.rows[0];
      next();
    })
    .catch(() => {
      next({
        log: `userController.getUser: ERROR: Error getting the user's information from the database.`,
        message: {
          err:
            'Error occurred in userController.getUser. Check server logs for more details.',
        },
      });
    });
};

userController.updateUser = (req, res, next) => {
  const { id } = req.query.id;
  const { email, password, avatar, first_name, last_name } = req.body;
  const allUser = `UPDATE "user" SET email = $2, password = $3, avatar = $4, first_name = $5, last_name = $6 WHERE user.__id = $1`;
  const allUserValue = [id, email, password, avatar, first_name, last_name];

  db.query(allUser, allUserValue)
    .then((data) => {
      res.locals.user = data.rows[0];
      next();
    })
    .catch(() => {
      next({
        log: `userController.updateUser: ERROR: Error updating the user's information in the database.`,
        message: {
          err:
            'Error occurred in userController.updateUser. Check server logs for more details.',
        },
      });
    });
};

userController.deleteUser = (req, res, next) => {
  const { id } = req.query.id;
  const allUser = `DELETE FROM "user" WHERE __id=$1`;
  const allUserValue = [id];

  db.query(allUser, allUserValue)
    .then((data) => {
      res.locals.user = data.rows[0];
      next();
    })
    .catch(() => {
      next({
        log: `userController.deleteUser: ERROR: Error deleting the user's information from the database.`,
        message: {
          err:
            'Error occurred in userController.deleteUser. Check server logs for more details.',
        },
      });
    });
};

// verify if the user login information is correct
// if not, redirect back to login page
userController.verifyUser = (req, res, next) => {
  const { email, password } = req.body;
  // console.log('this is the request body: ', req.body);
  const allUser = `SELECT * FROM "user" WHERE email=$1`;
  const allUserValue = [email];
  db.query(allUser, allUserValue)
    .then((data) => {
      console.log('this is the data from the user ', data.rows);
      if (data.rows[0].password === password) {
        res.locals.isVerified = true;
        res.locals.userInfo = data.rows;
      } else {
        res.locals.isVerified = false;
      }
      next();
    })
    .catch(() => {
      next({
        log: `userController.verifyUser: ERROR: Error getting the user's information from the database.`,
        message: {
          err:
            'Error occurred in userController.verifyUser. Check server logs for more details.',
        },
      });
    });
};

// create a user with information from registration page
userController.createUser = (req, res, next) => {
  const { email, password, avatar, first_name, last_name } = req.body;

  // make sure there's valid input
  if (!email || !password) {
    return res.status(500).send('You need to put in user and password! ');
  }

  const value = [
    String(email),
    String(password),
    String(avatar),
    String(first_name),
    String(last_name),
  ];

  const addUserQuery = `INSERT INTO "user" (email, password, avatar, first_name, last_name)
  VALUES ($1, $2, $3, $4, $5)`;

  db.query(addUserQuery, value)
    .then((data) => {
      res.locals.newUser = data;
      console.log('User added');
      next();
    })
    .catch((err) =>
      next({
        log:
          'userController.createUser: ERROR: Error inserting user data from user database',
        message: {
          err:
            'Error occurred in userController.createUser. Check server logs for more details.',
        },
        err: err,
      })
    );
};

module.exports = userController;
