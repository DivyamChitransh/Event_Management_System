import {db} from '../app.js';

export const CreateEvent = async (title, description, date, capacity) => {
    const query = `
    INSERT INTO events (title, description, date, total_capacity, remaining_tickets)
    VALUES (?, ?, ?, ?, ?)
  `;

  const [result] = await db.query(query, [title,description,date,capacity,capacity,]);
  return result;
};

export const GetAllEvents = async () => {
  const [rows] = await db.query("SELECT * FROM events WHERE date > NOW()");
  return rows;
};