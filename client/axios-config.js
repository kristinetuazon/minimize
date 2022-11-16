import axios from "axios";
const server = axios.create({
 baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000",
});
export default server;
