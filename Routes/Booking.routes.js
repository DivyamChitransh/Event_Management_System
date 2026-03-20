import express from 'express';
import {bookTicket,getBookings} from '../Controllers/Booking.controller.js';
const router = express.Router();

router.post('/', bookTicket);
router.get('/', getBookings);

export default router;