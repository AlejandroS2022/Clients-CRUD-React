import express from "express";
import { 
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient
} from "../controllers/clients.js";

const router = express.Router();

router.get("/", getAllClients);
router.get("/:id", getClientById);
router.post("/", createClient);
router.patch("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;