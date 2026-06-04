import { leadService } from "../service/lead.service.js";
import { toast } from "react-toastify";

export const useLead = () => {
  async function handleLeadCallback({
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    yourRequirements,
  }) {
    try {
      console.log("Sending Lead Data:", { firstName, lastName, emailAddress, phoneNumber, yourRequirements });
      const response = await leadService({
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        yourRequirements,
      });
      console.log("Lead Response:", response.data);
      toast.success("Request sent successfully! We will get back to you shortly.");
      return true;
    } catch (error) {
      console.error("Lead Error:", error);
      const errorMessage = error.response?.data?.message || error.response?.data?.errors?.[0]?.msg || "Something went wrong. Please try again later.";
      toast.error(errorMessage);
      return false;
    }
  }

  return {
    handleLeadCallback,
  };
};
