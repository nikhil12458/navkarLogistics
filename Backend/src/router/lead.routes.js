import express from "express";
import { leadController } from "../controller/lead.controller.js";

const router = express.Router();

router.post("/callback", leadController);

export default router;
