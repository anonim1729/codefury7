const {Router}=require('express');
const {signin,signup,signout,getuser,verifyToken,updateUser}=require('../controllers/AuthController.js');
const router=Router();

router.post('/signin',signin);
router.post('/signup',signup);
router.post('/signout',signout);
router.put('/me/updateUser',verifyToken,updateUser);
router.get('/me',verifyToken,getuser);

module.exports=router;