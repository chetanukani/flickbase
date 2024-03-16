const httpStatus = require('http-status');
const { User } = require('../model/user');
const userService = require('./user.service');

const createUser = async (email, password) => {
    try {
        if (await User.emailTaken(email)) {
            throw new Error('email taken');
        }

        const user = new User({
            email,
            password,
        });

        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
};

const genAuthToken = (user) => {
    const token = user.generateAuthToken();
    return token;
};

const signWithEmail = async (email, password) => {
    try {
        //check email
        //validate password
        const user = await userService.findUserByEmail(email);
        if (!user) {
            throw new Error('Bad email');
        }

        if (!(await user.comparePassword(password))) {
            throw new Error('Bad password');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

module.exports = { createUser, genAuthToken, signWithEmail };
