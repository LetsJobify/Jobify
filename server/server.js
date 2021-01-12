const express = require('express');
const path = require('path');
const interviewRouter = require('./routes/interview');
const userRouter = require('./routes/user');
const companyRouter = require('./routes/company');

// Define server variables
const PORT = 3000;
const app = express();

// Parse body
app.use(express.json());

// Define route handler
app.use('/interview', interviewRouter);
app.use('/user', userRouter);
app.use('/company', companyRouter);

// Send index.html on startup
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// catch all route handler
app.use((req, res) =>
  res.status(404).send('Page not found: Try a different end point')
);

// Express error handler for middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {
      err:
        'An error occurred. Please contact a technical representative for help.',
    },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
