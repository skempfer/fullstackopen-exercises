import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

const [newName, setNewName] = useState('')
const [newNumber, setNewNumber] = useState('')

  const [filter, setFilter] = useState('')
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleAddPerson = async (e) => {
    e.preventDefault()

    const existing = persons.find(p => p.name === newName)
    if (existing) {
      const confirmUpdate = window.confirm(`${newName} já existe. Atualizar número?`)
      if (!confirmUpdate) {
        return
      }

      const updatedPerson = { ...existing, number: newNumber }
      await personService
        .update(existing.id, updatedPerson)
        .then(response => {
          setPersons(persons.map(p =>
            p.id !== existing.id ? p : response.data
          ))
        })

      setNewName('')
      setNewNumber('')
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    await personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
      })

    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDeletePerson = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    const name = personToDelete ? personToDelete.name : 'this contact'
    const confirmDelete = window.confirm(`Delete ${name}?`)
    if (!confirmDelete) {
      return
    }

    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson={handleAddPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={(e) => setNewNumber(e.target.value)} />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDeletePerson} />
    </div>
  )
}

export default App