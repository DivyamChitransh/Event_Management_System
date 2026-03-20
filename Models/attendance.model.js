import { db } from "../app.js";

export const getBookingByCode = async (code) => {
    const [rows] = await db.query(
        "SELECT * FROM bookings WHERE booking_code = ?",[code]
    );
    return rows[0];
};

export const addAttendance = async (booking_id) => {
    await db.query(
        "INSERT INTO attendance (booking_id) VALUES (?)",[booking_id]
    );
};

export const getAttendanceCount = async (event_id) => {
    const [rows] = await db.query(
        `SELECT COUNT(*) AS total  FROM attendance a JOIN bookings b ON a.booking_id = b.id WHERE b.event_id = ?`,[event_id]
  );
  return rows[0].total;
};