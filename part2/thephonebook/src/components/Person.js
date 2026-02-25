const Person = ({ person, handleDelete }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p>{person.name} {person.number}</p>
            <button onClick={() => handleDelete(person.id)}>delete</button>
        </div>
    )
}

export default Person;