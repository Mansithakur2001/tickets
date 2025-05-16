const Ticket = require('../models/Ticket');

// POST /api/tickets
const createTicket = async (req, res) => {
  const { name, email, platform_ID, org_ID } = req.body;

  if (!name || !email || !platform_ID || !org_ID) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const ticket = new Ticket({ name, email, platform_ID, org_ID });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/tickets/:id
const getTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/tickets
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTicket, getTicket, getAllTickets };
