const Total = ({ parts }) => {
  const total = parts.reduce((sum, p) => sum + p.exercises, 0)
  return (
    <p>Total of {total} exercises</p>
  )
}

export default Total;