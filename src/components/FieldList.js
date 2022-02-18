import Field from './Field'

const FieldList = ({ selectedFields, deleteField}) => {

  return (
    <div className='field-list-section'>
      <h5 className='text-center mb-3'>Liste des indicateurs à suivre</h5>
      {selectedFields.length > 0 ? selectedFields.map((field) => (
        <Field
          key={field.name}
          field={field}
          deleteField={deleteField} />
      )) : 'Aucun indicateur renseigné'}
    </div>
  )
}

export default FieldList
