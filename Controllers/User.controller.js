import {CreateUser,GetAllUsers,SearchUsers,UpdateUser,DeleteUser} from '../Models/User.models.js';
import { getBookingsByUserId } from '../Models/Booking.model.js';

export const RegisterUser = async (req, res) => {
    try{
        const { name, email } = req.body;
        if(!name || !email) {
            return res.status(400).json({ message: "Name and email are required" });
        }
        await CreateUser(name, email);
        res.status(201).json({ message: "User registered successfully" });
    }catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const GetUsers = async (req, res) => {
    try {
        const users = await GetAllUsers();
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const Search = async (req, res) => {
    try {
        const { name } = req.query;
        const user = await SearchUsers(name);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    }catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const Updateuser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;
        await UpdateUser(id, name, email);
        return res.json({ message: "User updated successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await DeleteUser(id);
        return res.json({ message: "User deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await getBookingsByUserId(id);
        return res.json(bookings);
    } catch (err) {
        return res.status(500).json({message: "Something went wrong",});
    }
};
