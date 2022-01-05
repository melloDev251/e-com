import axios from "axios";

const BASE_URL = "http://localhost:5500/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjZlN2M0OTU2MDIyOTcyY2RkMTdjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTMwNjcwNywiZXhwIjoxNjQyMDg0MzA3fQ.oNQSUhLR--Dg6i4hAnRN79atbeOWV9bJuS-WwUCtWUA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
