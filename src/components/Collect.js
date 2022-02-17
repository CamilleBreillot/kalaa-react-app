import { FaTimes } from 'react-icons/fa'

const Collect = ( { collect, onDelete }) => {
  return (
    <div className='task'>
      <h5>
        {collect.name}
        <FaTimes onClick={ () => onDelete(collect.id)}/>
      </h5>
      <div className='d-flex'>
        <p className='mx-2 p-1 border border-secondary rounded'>Date : { collect.date }</p>
        <p className='mx-2 p-1 border border-secondary rounded'>Association : { collect.asso}</p>
      </div>
    </div>
  )
}

export default Collect
