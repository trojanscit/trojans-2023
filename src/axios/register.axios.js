import axios from "axios";

const base_url = "http://localhost:8080/api";

export const register = (name, email, phone, college, dept, year, events) =>
	axios.post(`${base_url}/data`, { name, email, phone, college, dept, year, events });
