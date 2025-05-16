const express = require('express');
const router = express.Router();
const { createTicket, getTicket, getAllTickets } = require('../controllers/ticketController');

router.post('/tickets', createTicket);
router.get('/tickets', getAllTickets); 
router.get('/tickets/:id', getTicket);
   
module.exports = router;
