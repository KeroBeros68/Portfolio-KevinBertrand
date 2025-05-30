const express = require('express');
const router = express.Router();
const worksCtrl = require('../controllers/works');
const optimizeImg = require('../middlewares/optimizeImg');

router.post('/',worksCtrl.createWork);
router.get('/', worksCtrl.getAllWork);

router.delete('/',auth, multer, optimizeImg, worksCtrl.deleteOneWork);


module.exports = router;