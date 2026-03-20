import express from 'express';
import { RegisterUser,GetUsers,Search,Updateuser,deleteUser,getUserBookings } from '../Controllers/User.controller.js';
const router = express.Router();

router.post('/register', RegisterUser);
router.get('/', GetUsers);
router.get('/', Search);
router.put('/:id', Updateuser);
router.delete('/:id', deleteUser);
router.get('/:id/bookings', getUserBookings);

export default router;