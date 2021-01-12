const db = require('../database/dbModel');

const companyController = {};

// get all companies, returns all objects on success
companyController.getAllCompanies = (req, res, next) => {
  const query = `SELECT * FROM company WHERE 1=1`;
  const inputs = [];

  db.query(query, inputs, (err, result) => {
    if (err) {
      return next({ log: 'Error getting company info' });
    }
    res.locals.companies = result.rows;
    return next();
  });
};

// get single company information, returns object on success
companyController.getCompany = (req, res, next) => {
  const { id } = req.params;

  const query = `SELECT * FROM company WHERE 1=1 AND __id = ($1)`;
  const inputs = [id];

  db.query(query, inputs, (err, result) => {
    if (err) {
      console.log(err);
      return next({ log: 'Error getting company info' });
    }
    res.locals.company = result.rows[0];
    return next();
  });
};

// create company, returns 1 on success
companyController.createCompany = (req, res, next) => {
  const {
    name, address, phone, logo, size,
  } = req.body;

  const query = `INSERT INTO company (name, address, phone, logo, size) VALUES ($1, $2, $3, $4, $5)`;
  const inputs = [name, address, phone, logo, size];

  db.query(query, inputs, (err, result) => {
    if (err) {
      return next({ log: 'Error creating company info' });
    }
    res.locals.company = result.rowCount;
    return next();
  });
};

// updates company, returns 1 on success
companyController.updateCompany = (req, res, next) => {
  const { id } = req.params;
  const {
    name, address, phone, logo, size,
  } = req.body;

  const query = `UPDATE company SET name=($2), address=($3), phone=($4), logo=($5), size=($6) WHERE 1=1 AND __id=($1)`;
  const inputs = [id, name, address, phone, logo, size];

  db.query(query, inputs, (err, result) => {
    if (err) {
      console.log(err);
      return next({ log: 'Error updating company info' });
    }
    console.log(result);
    res.locals.company = result.rowCount;
    return next();
  });
};

// deletes a company, returns 1 on success
companyController.deleteCompany = (req, res, next) => {
  const { id } = req.params;

  const query = `DELETE FROM company WHERE 1=1 AND __id = $1`;
  const inputs = [id];

  db.query(query, inputs, (err, result) => {
    if (err) {
      return next({ log: 'Error deleting company info' });
    }
    res.locals.company = result.rowCount;
    return next();
  });
};

module.exports = companyController;
