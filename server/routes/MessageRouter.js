const {Router}=require('express');
const router=Router();
const {getAllMessages,addMessage}=require('../controllers/MessagesController');


router.get('/',getAllMessages);
router.post('/',addMessage);

module.exports=router;