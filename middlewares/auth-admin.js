const Users = require('../models/user-model')

const authAdmin = async (req, res, next) => {
    try {
        const user = await Users.findOne({_id: req.user.id})

        if(user.role !== 1){
            return res.status(500).json({msg: "Admin resources access denied."})
        }
        next()
    } catch (e) {
        return res.status(500).json({msg: e.message})
    }
}

module.exports = authAdmin