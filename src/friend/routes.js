const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getFriends);
router.post('/', controller.addFriend);

router.get("/:id", controller.getFriendsById);
router.get("/date/:date", controller.getFreeFriends );


module.exports = router;