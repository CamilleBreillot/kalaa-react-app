import { FaTimes } from 'react-icons/fa'

const Field = ({ field, deleteField }) => {
  return (
    <div className='task'>
      <h3>
        {field.name}
        <FaTimes onClick={() => deleteField(field.id)} />
      </h3>
      <p>{field.date}</p>
    </div>
  )
}

export default Field
