const express = require('express');
const {addCandidate,getCandidate } = require('../controllers/candidate')

const router = express.Router();


router.post('/addcandidate', addCandidate)
router.get('/getcandidate', getCandidate)



module.exports = router