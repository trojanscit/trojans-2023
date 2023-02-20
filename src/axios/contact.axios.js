import axios from 'axios'

const base_url = 'http://localhost:8080/api'

export const contact = (name, email, message) =>
    axios.post(`${base_url}/contact`, { name, email, message })