const router = require('express').Router()
const userController = require('../controllers/user-controller')
const auth = require('../middlewares/auth')
const authAdmin = require('../middlewares/auth-admin')

router.post('/register', userController.register)
router.post('/activation', userController.activateEmail)
router.post('/login', userController.login)
router.post('/refresh_token', userController.getAccessToken)
router.post('/forgot', userController.forgotPassword)
router.post('/reset', auth, userController.resetPassword)
router.get('/userinfo', auth, userController.getUserInfo)
router.get('/allusersinfo', auth, authAdmin, userController.getUsersAllInfo)
router.get('/logout', userController.logout)
router.patch('/update', auth, userController.updateUser)
router.patch('/update_role/:id', auth, authAdmin, userController.updateUsersRole)
router.delete('/delete/:id', auth, authAdmin, userController.deleteUser)
router.post('/google_login', userController.googleLogin)


module.exports = router