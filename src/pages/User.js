import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Masonry from 'react-masonry-css'
import NoteCard from '../components/Card'

export default function Users() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/employees/')
      .then(res => res.json())
      .then(data => setEmployees(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/employees/' + id, {
      method: 'DELETE'
    })
    const newNotes = employees.filter(note => note.id != id)
    setEmployees(newNotes)
  }

  const breakpoints = {
    default: 4,
    1100: 2,
    700: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {employees.map(note => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
