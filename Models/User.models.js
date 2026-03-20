import {db} from '../app.js';

export const CreateUser = async (name, email) => {
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  const [result] = await db.query(query, [name, email]);
  return result;
};

export const GetAllUsers = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};

export const SearchUsers = async (name) => {
  const query = "SELECT * FROM users WHERE name LIKE ?";
  const [rows] = await db.query(query, [`%${name}%`]);
  return rows;
};

export const UpdateUser = async (id, name, email) => {
  const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  const [result] = await db.query(query, [name, email, id]);
  return result;
};

export const DeleteUser = async (id) => {
  const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
  return result;
};
