const db = require('../database/dbModel');

const interviewController = {};

// get single interview information
interviewController.getInterview = (req, res, next) => {
  const { id } = req.params;
  const interviewQuery = `SELECT * FROM "interview" WHERE __id=$1`;
  const interviewValue = [id];

  db.query(interviewQuery, interviewValue)
    .then((data) => {
      res.locals.interview = data.rows[0];
      console.log('this is the data from the interview ', data.rows);
      next();
    })
    .catch(() => {
      next({
        log: `interviewController.getInterview: ERROR: Error getting the interview information from the database.`,
        message: {
          err:
            'Error occurred in interviewController.getInterview. Check server logs for more details.',
        },
      });
    });
};

// create an interview with information from interview form
interviewController.createInterview = (req, res, next) => {
  const {
    user_id,
    company_id,
    date,
    rating,
    type,
    interviewer,
    address,
    offer,
    pre_notes,
    feedback,
    improve,
    questions,
    accepted,
  } = req.body;

  console.log(req.body);
  // make sure there's valid input
  if (!user_id || !company_id) {
    return res.status(500).send('You need to put in user and company! ');
  }

  const value = [
    String(user_id),
    String(company_id),
    String(date),
    String(rating),
    String(type),
    String(interviewer),
    String(address),
    offer,
    String(pre_notes),
    String(feedback),
    String(improve),
    String(questions),
    accepted,
  ];

  const addInterviewQuery = `INSERT INTO "interview" (user_id, company_id, date, rating, type, interviewer, address, offer, pre_notes, feedback, improve, questions, accepted) VALUES ($1, $2, $3,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING __id, user_id`;
  // Add the user to the database
  db.query(addInterviewQuery, value)
    .then((data) => {
      res.locals.newInterview = data;
      console.log('Interview added');
      next();
    })
    .catch((err) =>
      next({
        log:
          'interviewController.addInterview: ERROR: Error adding interview data to interview database',
        message: {
          err:
            'Error occurred in interviewController.addInterview. Check server logs for more details.',
        },
        err: err,
      })
    );
};

// update interview of given interview id with fields from the body
interviewController.updateInterview = (req, res, next) => {
  const { id } = req.params;
  const {
    user_id,
    company_id,
    date,
    rating,
    type,
    interviewer,
    address,
    offer,
    pre_notes,
    feedback,
    improve,
    questions,
    accepted,
  } = req.body;

  const interviewQuery = `UPDATE "interview" SET user_id = $1, company_id = $2, date= $3, rating= $4, type= $5, interviewer= $6, address= $7, offer= $8, pre_notes= $9, feedback= $10, improve= $11, questions= $12, accepted= $3 WHERE interview.__id = $14`;
  const interviewValue = [
    String(user_id),
    String(company_id),
    String(date),
    String(rating),
    String(type),
    String(interviewer),
    String(address),
    offer,
    String(pre_notes),
    String(feedback),
    String(improve),
    String(questions),
    accepted,
    id,
  ];

  db.query(interviewQuery, interviewValue)
    .then((data) => {
      res.locals.interview = data.rows[0];
      console.log('this is the data from the interview ', data.rows);
      next();
    })
    .catch(() => {
      next({
        log: `interviewController.updateInterview: ERROR: Error updating the interview information in the database.`,
        message: {
          err:
            'Error occurred in interviewController.updateInterview. Check server logs for more details.',
        },
      });
    });
};

// delete interview of given interview id
interviewController.deleteInterview = (req, res, next) => {
  const { id } = req.params;
  const interviewQuery = `DELETE FROM "interview" WHERE __id=$1`;
  const interviewValue = [id];

  db.query(interviewQuery, interviewValue)
    .then((data) => {
      res.locals.user = data.rows[0];
      next();
    })
    .catch(() => {
      next({
        log: `interviewController.getInterview: ERROR: Error deleting the interview information from the database.`,
        message: {
          err:
            'Error occurred in interviewController.getInterview. Check server logs for more details.',
        },
      });
    });
};

// get all interviews for user id within time range (expect time range in body)
interviewController.getInterviewsForUser = (req, res, next) => {
  const { id } = req.params;
  // get time constraints from body
  // const { timeStart, timeEnd } = req.body;

  const interviewQuery = `SELECT * FROM "interview" LEFT OUTER JOIN "company" ON "interview".company_id="company".__id WHERE user_id=$1`; // query without time constraints
  // const interviewQuery = `SELECT * FROM "interview" WHERE user_id=$1 AND (date < ${timeEnd} AND date > ${timeStart})`;

  const interviewValue = [id];

  console.log('blah ', interviewQuery);
  db.query(interviewQuery, interviewValue)
    .then((data) => {
      res.locals.interview = data.rows;
      console.log('this is the data from the interview ', data.rows);
      next();
    })
    .catch(() => {
      next({
        log: `interviewController.getInterviewsForUser: ERROR: Error getting the interview information from the database.`,
        message: {
          err:
            'Error occurred in interviewController.getInterviewsForUser. Check server logs for more details.',
        },
      });
    });
};

// get all interviews for company id within time range (expect time range in body)
interviewController.getInterviewsForCompany = (req, res, next) => {
  const { id } = req.params;
  // get time constraints from body
  const { timeStart, timeEnd } = req.body;
  const interviewQuery = `SELECT * FROM "interview" WHERE company_id=$1`; // query without time constraints
  // const interviewQuery = `SELECT * FROM "interview" WHERE (company_id=$1) AND (date < ${timeEnd} AND date > ${timeStart})`;
  //SELECT * FROM "interview" WHERE (company_id=1) AND (date > '2017-04-20 09:30:20' AND date < '2021-03-31 09:30:20 ')
  const interviewValue = [id];

  db.query(interviewQuery, interviewValue)
    .then((data) => {
      res.locals.interview = data.rows[0];
      console.log('this is the data from the interview ', data.rows);
      next();
    })
    .catch(() => {
      next({
        log: `interviewController.getInterviewsForCompany: ERROR: Error getting the interview information from the database.`,
        message: {
          err:
            'Error occurred in interviewController.getInterviewsForCompany. Check server logs for more details.',
        },
      });
    });
};

// get all interviews outcomes with accepted offers 
interviewController.getOutcomes = (req, res, next) => {

    const interviewQuery = `SELECT * FROM "interview" WHERE accepted = true ORDER BY date DESC`; 
  
    db.query(interviewQuery)
      .then((data) => {
        res.locals.interview = data.rows[0];
        console.log('this is outcome data ', data.rows);
        next();
      })
      .catch(() => {
        next({
          log: `interviewController.getOutcomes: ERROR: Error getting the outcome information from the database.`,
          message: {
            err:
              'Error occurred in interviewController.getOutcomes. Check server logs for more details.',
          },
        });
      });
  };

// get all interview aggregate data
interviewController.aggregate = (req, res, next) => {

  const interviewQuery = `SELECT i.__id as "iid",* FROM "interview" i LEFT OUTER JOIN "user" u ON "u".__id = "i".user_id LEFT OUTER JOIN "company" c ON "i".company_id = "c".__id`; 

  db.query(interviewQuery)
    .then((data) => {
      res.locals.interview = data.rows[0];
      console.log('this is outcome data ', data.rows);
      next();
    })
    .catch(() => {
      next({
        log: `interviewController.aggregate: ERROR: Error getting the aggregate information from the database.`,
        message: {
          err:
            'Error occurred in interviewController.aggregate. Check server logs for more details.',
        },
      });
    });
};

module.exports = interviewController;
