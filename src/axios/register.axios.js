import axios from "axios";

const base_url = "https://trojans2023-server.onrender.com";

export const register = (name, email, phone, college, dept, year, events) =>
	axios.post(`${base_url}/data`, { name, email, phone, college, dept, year, events });
