import { errorHandler } from "../utilis/error.js"
import User from '../models/Usermodel.js'

export const test = (req, res) => {
    res.json({
        message: 'API is working'
    })
}



export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return next(errorHandler(401, 'You can update only your account'))
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profilePicture: req.body.profilePicture
                }
            },
            { new: true }
        );
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(updatedUser);

    } catch (error) {
        next(error)
    }
}