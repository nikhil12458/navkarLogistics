import { leadService } from "../service/lead.service.js";

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
      return response;
    } catch (error) {
      console.error("Lead Error:", error);
    }
  }

  return {
    handleLeadCallback,
  };
};
