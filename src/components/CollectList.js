import { useLocation } from 'react-router-dom'
import Collect from './Collect'

const CollectList = ({ collects, onDelete }) => {
  const location = useLocation()
  return (
    <div className='collect-lists-section'>
      {location.pathname === '/' && (
        <h5 className='text-center mb-3'>
          Liste de vos déclarations
        </h5>)}
      {collects.length > 0 ?
        collects.map((collect) => (
          <Collect
            key={collect.id}
            collect={collect}
            onDelete={onDelete} />
        )) : "Aucune collecte déclarée"}
    </div>
  )
}

export default CollectList
