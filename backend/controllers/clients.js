import Client from "../models/clients.js";

export const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getClientById = async (req, res) => {
    try {
        const client = await Client.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(client[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createClient = async (req, res) => {
    try {
        const create = await Client.create(req.body);
        res.json(create);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateClient = async (req, res) => {
    try {
        const update = await Client.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(update);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteClient = async (req, res) => {
    try {
        const deleteClient = await Client.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(deleteClient);
    } catch (error) {
        res.json({ message: error.message });
    }
}