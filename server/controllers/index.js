const models = require('../models/index');

const createJSON = (body, callback) => {
  models.createJSON(body, (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log('Controllers: createJSON POST success');
      callback(null, data);
    }
  });
};

module.exports = {
  createJSON
};
