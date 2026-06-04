import { appendLead } from "../services/googleSheet.service.js";

export const leadController = async (req, res) => {

  try {
    console.log("Incoming Lead Data:", req.body);
    await appendLead(req.body);

    res.status(200).json({
      success: true,
      message: "Lead saved",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
