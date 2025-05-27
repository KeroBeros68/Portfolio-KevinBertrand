const express = require('express');
const router = express.Router();
const worksCtrl = require('../controllers/works');

router.post('/',worksCtrl.createWork);
router.get('/', worksCtrl.getAllWork);

router.delete('/',auth , worksCtrl.deleteOneWork);
/* router.get('/lastworking', worksCtrl.getLastWorking);
router.get('/:id', worksCtrl.getOneWork);
 */

module.exports = router;