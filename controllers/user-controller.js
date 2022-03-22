const Users = require('../models/user-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {CLIENT_URL} = process.env
const sendMail = require('./send-mail')
const {verify} = require("jsonwebtoken");

const UserController = {
    register: async (req, res) => {
        try{
            const {firstname, lastname, email, password, cf_password} = req.body

            if(!firstname || !lastname || !email || !password){
                return res.status(400).json({message: "Пожалуйста заполните все поля."})
            }

            if(firstname.length < 2 || lastname.length < 2){
                return res.status(400).json({message: "Имя и фамилия не должны иметь меньше двух символов."})
            }

            if(!validateEmail(email)){
                return res.status(400).json({message: "Неправильная почта, попробуйте еще раз."})
            }


            const user = await Users.findOne({email})

            if(user){
                return res.status(400).json({message: "Такой email уже зарегистрировано."})
            }

            if(password.length < 8){
                return res.status(400).json({message: "Пароль должен быть не меньше 8 символов."})
            }

            if(password!=cf_password){
                return res.status(400).json({message: "Ошибка при подтверждении пароля, попробуйте заново."})
            }

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = {
                firstname, lastname, email, password: passwordHash
            }

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activate/${activation_token}`

            sendMail(email, url, "Verify your email address")




            res.json({message: "Ваши данные приняты, пожалуйста, подтвердите через почту."})
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    activateEmail: async(req, res) => {
        try{
            const {activation_token} = req.body
            const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)

            console.log(user)

            const {firstname, lastname, email, password} = user

            const check = await Users.findOne({email})

            if(check){
                return res.status(400).json({msg:"This email already exists."})
            }

            const newUser = new Users({
                firstname, lastname, email, password
            })

            await newUser.save()

            res.json({msg: "Account has been activated!"})

        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    login: async (req, res) => {
        try{
            const {email, password} = req.body;
            const user = await Users.findOne({email})
            if(!user){
                return res.status(400).json({message: "Аккаунт с такой почтой не существует."})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return res.status(400).json({message: "Неправильный пароль!"})
            }

            const refresh_token = createRefreshToken({id: user._id})
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refresh_token',
                maxAge: 7 * 24 * 60 * 60 * 1000
            })

            res.json({message: "Вход успешно выполнен!"})
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },

    getAccessToken: (req, res) => {
        try{
            const rf_token = req.cookies.refreshtoken

            if(!rf_token){
                return res.status(400).json({msg: "Please login now!"})
            }

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (e, user) => {
                if(e){
                    return res.status(400).json({msg: "Please login now!"})
                }

                const access_token = createAccessToken({id: user.id})
                res.json({access_token})
            })

        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },

    forgotPassword: async (req, res) => {
        try {
            const {email} = req.body
            const user = await Users.findOne({email})

            if(!email){
                return res.status(400).json({message: "Пожалуйста, заполните все поля."})
            }

            if(!validateEmail(email)){
                return res.status(400).json({message: "Неправильная почта, попробуйте еще раз."})
            }

            if(!user){
                return res.status(400).json({message: "Такой адресс почты не зарегистрирован."})
            }




            const access_token = createAccessToken({id: user.id})
            const url = `${CLIENT_URL}/user/reset/${access_token}`

            sendMail(email, url, "Восстановление дступа к аккаунту.")
            res.json({message: "Мы отправили письмо к вам на почту, пожалуйста проверьте свою почту."})
        } catch (e) {
            return res.status(500).json({message: e.message})
        }
    },

    resetPassword: async (req, res) => {
        try {
            const {password} = req.body
            console.log(password)
            const passwordHash = await bcrypt.hash(password, 12)

            await Users.findOneAndUpdate({_id: req.user.id}, {
                password: passwordHash
            })

            res.json({msg: "Password successfully changed"})
        }

        catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },

    getUserInfo: async (req, res) => {
        try{
            const user = await Users.findById(req.user.id).select('-password')

            res.json(user)
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    getUsersAllInfo: async (req, res) => {
        try{
            const users = await Users.find().select('-password')
            res.json(users)
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    logout: async (req, res) => {
        try{
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out."})
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    updateUser: async (req, res) => {
        try {
            const {firstname, lastname, avatar} = req.body

            await Users.findOneAndUpdate({_id: req.user.id}, {
                firstname, lastname, avatar
            })

            res.json({msg: "Update Success"})
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    updateUsersRole: async (req, res) => {
        try {
            const {role} = req.body

            await Users.findOneAndUpdate({_id: req.params.id}, {
                role
            })

            res.json({msg: "Update Success!"})

        }
        catch (e) {
            return res.status(500).json({msg: e.message})
        }
    },
    deleteUser: async (req, res) => {
        try{
            await Users.findByIdAndDelete(req.params.id)

            res.json({msg: "Deleted Success!"})
        } catch (e) {
            return res.status(500).json({msg: e.message})
        }
    }
}

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
};

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

module.exports = UserController