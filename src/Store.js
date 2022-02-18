import CollectList from './components/CollectList'
import CollectForm from './components/CollectForm'
import Header from './components/Header'

const Store = ({ collects, onDelete, onAdd, selectedFields }) => {
  return (
    <div>
      <Header title={'Magasin Adoba'} text={'Bienvenue sur votre espace de déclarations RSE'}/>
      <div className="collect-container">
        <CollectList collects={collects}
          onDelete={onDelete} />
        <CollectForm onAdd={onAdd} selectedFields={selectedFields} />
      </div>
    </div>
  )
}

export default Store
