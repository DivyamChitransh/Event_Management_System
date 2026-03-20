import {getAttendanceCount,getBookingByCode,addAttendance} from '../Models/attendance.model.js'; 

export const markAttendance = async (req, res) => {
    try {
        const { id } = req.params; 
        const { booking_code } = req.body;
        if (!booking_code) {
            return res.status(400).json({message: "booking_code is required",});
        }
        const booking = await getBookingByCode(booking_code);
        if (!booking) {
            return res.status(404).json({message: "Invalid booking code",});
        }
        if (booking.event_id != id) {
            return res.status(400).json({message: "Booking does not belong to this event",});
        }
        await addAttendance(booking.id);
        const total = await getAttendanceCount(id);
        return res.json({message: "Attendance marked",total_attendance: total,});
    } catch (err) {
        return res.status(500).json({message: "Something went wrong",});
    }
};