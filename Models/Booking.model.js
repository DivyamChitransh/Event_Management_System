import { db } from "../app.js";

export const createBooking = async (user_id, event_id, booking_code) => {
    const connection = await db.getConnection();
    try {
        await connection.beginTransaction();
        const [events] = await connection.query(
            "SELECT * FROM events WHERE id = ? FOR UPDATE",[event_id]
        );
        const event = events[0];
        if (!event) {
            throw new Error("Event not found");
        }
        if (event.remaining_tickets <= 0) {
            throw new Error("No tickets available");
        }
        await connection.query(
            "INSERT INTO bookings (user_id, event_id, booking_code) VALUES (?, ?, ?)",[user_id, event_id, booking_code]
        );
        await connection.query(
            "UPDATE events SET remaining_tickets = remaining_tickets - 1 WHERE id = ?",[event_id]
        );
        await connection.commit();
    } catch (err) {
        await connection.rollback();
        throw err;
    } finally {
        connection.release();
    }
};

export const getAllBookings = async () => {
    const query = `
    SELECT b.id,b.booking_code,u.name AS user_name,e.title AS event_title,b.booking_date 
    FROM bookings b JOIN users u ON b.user_id = u.id JOIN events e ON b.event_id = e.id
    `;
    const [rows] = await db.query(query);
    return rows;
};

export const getBookingsByUserId = async (user_id) => {
    const query = `
    SELECT b.id,b.booking_code,e.title AS event_title,b.booking_date
    FROM bookings b
    JOIN events e ON b.event_id = e.id
    WHERE b.user_id = ?
  `;
  const [rows] = await db.query(query, [user_id]);
  return rows;
};