import {CreateEvent,GetAllEvents} from '../Models/Events.models.js';

export const RegisterEvent = async (req, res) => {
    try{
        const { title, description, date, capacity } = req.body;    
        if(!title || !date || !capacity) {
            return res.status(400).json({ message: "All fields are required" });
        }
        await CreateEvent(title, description, date, capacity);
        res.status(201).json({ message: "Event created successfully" });
    }catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

export const GetEvents = async (req, res) => {
    try {
        const events = await GetAllEvents();
        return res.status(200).json(events);
    }   
    catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
};