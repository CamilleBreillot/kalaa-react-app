import Collect from './Collect'

const CollectList = ({ collects, onDelete, onToggle }) => {

  return (
    <div className='collect-lists-section'>
      {collects.map((collect) => (
        <Collect
          key={collect.id}
          collect={collect}
          onDelete={onDelete} />
      ))}
    </div>
  )
}

export default CollectList
