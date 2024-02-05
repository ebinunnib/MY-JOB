import userModel from '../models/userModel.js';

export const registerLogic = async (req, res,next) => {
    try {
        const { name, email, password } = req.body;

        // validate
        if (!name || !email || !password) {
            return res.status(400).send({ success: false, message: 'Name,email and password are required' });
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: 'Email already exists, please log in.'
            });
        }

        const user = await userModel.create({ name, email, password });

        res.status(201).send({
            success: true,
            message: 'Registration successful',
            user
        });
    } catch (error) {
       next(error)
    }
};
