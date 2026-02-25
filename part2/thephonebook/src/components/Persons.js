import Person from './Person'

const Persons = ({ persons, handleDelete }) => {
    return (
        <>
            {persons.map(person => (
                <Person key={person.id} person={person} handleDelete={handleDelete} />
            ))}
        </>
    )
}

export default Persons;