const User = require('../models/user');

const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res){
        const userResult = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.unsername }]
        });

        if (!userResult){
            return res.status(400).json({ message: 'Error: There is no user with this ID!' });
        }

        res.json(userResult);
    },

    async signUp({ body }, res){
        const user = await User.create(body);

        if (!user){
            return res.status(400).json({ message: 'An error has occured!'});
        }

        const token = signToken(user);
        res.json({ token, user });
    },

    async login({ body }, res){
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }]});
        if (!user){
            return res.status(400).json({ message: 'Error: This user does not exist!'});
        }
        
        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw){
            return res.status(400).json({ message: 'Error: Password is incorrect!'});
        }

        const token = signToken(user);
        res.json({ token, user });
    },

    async saveEvent({ user, body }, res){
        try {
            const updateUser = await User.findOneAndUpdate(
                { _id: user._id},
                {$addToSet: {savedEvent: body}},
                {new: true, runValidators: true}
            );
            return res.json(updateUser);
        } catch(error){
            console.log(error);
            return res.status(400).json(error);
        }
    },
};