import axios from 'axios'

// const base_url = 'http://localhost:8080/api'
const base_url = 'https://trojans2023-server.onrender.com/api'

export const contact = (name, email, message) =>
    axios.post(`${base_url}/contact`, { name, email, message })