import axios from "axios";

// const base_url = "http://localhost:8080/api";
const base_url = "https://trojans2023-server.onrender.com/api";

export const register = (name, email, phone, college, year, events) =>
	axios.post(`${base_url}/data`, {name, email, phone, college, year, events});
