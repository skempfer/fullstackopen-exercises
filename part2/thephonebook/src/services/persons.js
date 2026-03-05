import axios from 'axios'
const baseUrl = 'https://frozen-brook-97741-23b421b459e3.herokuapp.com/api/persons'

const getAll = () => axios.get(baseUrl)
const create = newObject => axios.post(baseUrl, newObject)
const remove = id => axios.delete(`${baseUrl}/${id}`)
const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject)

const personService = { getAll, create, remove, update }

export default personService