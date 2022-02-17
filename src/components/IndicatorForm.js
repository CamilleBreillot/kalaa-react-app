import { useState } from 'react'

const IndicatorForm = ({ addField }) => {
  const [field, setField ] = useState({
    name: '',
    value: 0,
  })

  const onSubmit = (e) => {
    e.preventDefault()

    addField({ field })

    setField('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input type='text' placeholder='Add name' value={field.name}
        onChange={(e) => setField(e.target.value)}/>
      </div>
      <input type='submit' value='Save Indicator' className='btn btn-block'></input>
    </form>
  )
}

export default IndicatorForm
