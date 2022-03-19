const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try{
        const token = req.header('Authorization')
        if(!token){
            return res.status(400).json({msg: "Invalid Authentication."})
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (e, user) => {
            if(e){
                return res.status(400).json({msg: e.message})
            }

            req.user = user
            next()
        })
    } catch (e) {
        return res.status(500).json({msg: e.message})
    }
}

module.exports = auth