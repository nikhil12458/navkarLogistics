import express from "express";
import { leadController } from "../controller/lead.controller.js";
import { leadValidationRules, validateLead } from "../validator/lead.validator.js";

const router = express.Router();

router.post(
  "/callback",
  leadValidationRules,
  validateLead,
  leadController
);

export default router;
