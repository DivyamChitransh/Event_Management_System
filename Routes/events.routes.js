import express from 'express';
import {RegisterEvent,GetEvents} from '../Controllers/Event.controller.js';
import {markAttendance} from '../Controllers/attendance.controller.js';
const router = express.Router();  

router.post('/register', RegisterEvent);
router.get('/', GetEvents);
router.post('/:id/attendance', markAttendance);

export default router;