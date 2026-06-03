import axios from "axios";

const leadApiInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export async function leadService({
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  yourRequirements,
}) {
  const response = await leadApiInstance.post("/api/leads/callback", {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    yourRequirements,
  });

  return response;
}

export default leadService;
