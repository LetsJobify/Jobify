const db = require('../database/dbModel');

const interviewController = {};

// get single interview information
interviewController.getInterview = (req, res, next) => {

};

interviewController.getAllUserInterviews = (req, res, next) => {
  const { userID } = req.params.id;
  const query = `SELECT * FROM interviews WHERE 1=1 AND user_id = $1`;
  const inputs = [userID];

  db.query(query, inputs, (err, result) => {
    if (err) {
      return next({ log: 'Error getting all user interviews' });
    }
    const allInterviews = result.rows.map((arr) => ({
      id: arr[0],
      user_id: arr[1],
      company_id: arr[2],
      date: arr[3],
      rating: arr[4],
      type: arr[5],
      interviewer: arr[6],
      address: arr[7],
      offer: arr[8],
      pre_notes: arr[9],
      feedback: arr[10],
      improve: arr[11],
      questions: arr[12],
      accepted: arr[13],
    }));
    res.locals.interviews = allInterviews;
    return next();
  });
};

interviewController.getAllCompanyInterviews = (req, res, next) => {
  const { companyID } = req.params.id;
  const query = `SELECT * FROM interviews WHERE 1=1 AND company_id = $1`;
  const inputs = [companyID];

  db.query(query, inputs, (err, result) => {
    if (err) {
      return next({ log: 'Error getting all company interviews' });
    }
    const allInterviews = result.rows.map((arr) => ({
      id: arr[0],
      user_id: arr[1],
      company_id: arr[2],
      date: arr[3],
      rating: arr[4],
      type: arr[5],
      interviewer: arr[6],
      address: arr[7],
      offer: arr[8],
      pre_notes: arr[9],
      feedback: arr[10],
      improve: arr[11],
      questions: arr[12],
      accepted: arr[13],
    }));
    res.locals.interviews = allInterviews;
    return next();
  });
};

module.exports = interviewController;