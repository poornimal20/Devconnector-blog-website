// This middleware may be used to ensure that the ObjectID provided in a request is in the correct format before attempting to query the database. It helps maintain data integrity by preventing invalid ObjectIDs from causing errors during database operations.



const mongoose = require('mongoose');
// middleware to check for a valid object id
const checkObjectId = (idToCheck) => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[idToCheck]))
    return res.status(400).json({ msg: 'Invalid ID' });
  next();
};

module.exports = checkObjectId;
