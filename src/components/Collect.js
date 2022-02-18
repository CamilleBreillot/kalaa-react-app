import { FaTimes } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

const Collect = ( { collect, onDelete }) => {
  const location = useLocation()
  return (
    <div className='task'>
      <h4>
        {collect.name}
        {location.pathname === '/' &&
          (<FaTimes onClick={() => onDelete(collect.id)} />)}
      </h4>
      <div className='d-flex'>
        <p className='mx-2 p-1 border border-secondary rounded'>Date : { collect.date }</p>
        <p className='mx-2 p-1 border border-secondary rounded'>Association : { collect.asso}</p>
      </div>
    </div>
  )
}

export default Collect
