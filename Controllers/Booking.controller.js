import { createBooking,getAllBookings } from "../Models/Booking.model.js";

export const bookTicket = async (req, res) => {
    try {
        const { user_id, event_id } = req.body;
        if (!user_id || !event_id) {
            return res.status(400).json({
                message: "user_id and event_id are required",
            });
        }
        const booking_code = "BOOK_" + Date.now();
        await createBooking(user_id, event_id, booking_code);
        return res.status(201).json({message: "Booking successful",booking_code});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const getBookings = async (req, res) => {
    try {
        const bookings = await getAllBookings();
        return res.status(200).json(bookings);
    } catch (err) {
        return res.status(500).json({message: "Internal Server Error",});
    }
};