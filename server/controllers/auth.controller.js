const httpStatus = require('http-status');
const { authService } = require('../services');

const authController = {
    async register(req, res) {
        try {
            const { email, password } = req.body;
            const user = await authService.createUser(email, password);
            const token = await authService.genAuthToken(user);

            //send verification email
            res.cookie('x-access-token', token)
                .status(httpStatus.CREATED)
                .send({ user, token });
        } catch (error) {
            console.log(error);
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
    },

    async signin(req, res) {
        try {
            const { email, password } = req.body;
            const user = await authService.signWithEmail(email, password);
            const token = await authService.genAuthToken(user);
            res.cookie('x-access-token', token).send({ user, token });
        } catch (error) {
            console.log(error);
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
    },
};

module.exports = authController;
