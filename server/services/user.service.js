const { User } = require('../model/user');
const httpStatus = require('http-status');

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

module.exports = { findUserByEmail };
