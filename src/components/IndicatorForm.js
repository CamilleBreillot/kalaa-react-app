import { useState } from 'react'

const IndicatorForm = ({ addIndicator }) => {
  const [indicator, setIndicator ] = useState({
    name: '',
    value: 0,
  })

  const onSubmit = (e) => {
    e.preventDefault()

    addIndicator({ indicator })

    setIndicator('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input type='text' placeholder='Add name' value={indicator.name}
        onChange={(e) => setIndicator(e.target.value)}/>
      </div>
      <input type='submit' value='Save Indicator' className='btn btn-block'></input>
    </form>
  )
}

export default IndicatorForm
