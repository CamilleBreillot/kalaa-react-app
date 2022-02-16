import { FaTimes } from 'react-icons/fa'

const Collect = ( { collect, onDelete }) => {
  return (
    <div className='task'>
      <h3>
        {collect.name}
        <FaTimes onClick={ () => onDelete(collect.id)}/>
      </h3>
      <p>{ collect.date }</p>
    </div>
  )
}

export default Collect
