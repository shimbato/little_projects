import React from 'react'
// import './tables.css'

export const Table = () => {
  return (
    <div className='forma'>
    <form>
      <h2>Welcome</h2>
      <div><input type='text' name='text' placeholder='Login' className='form_controll'></input></div>
      <div><input type='text' name='text' placeholder='Password' className='form_controll'></input></div>
      <div className='remember'><input type='checkbox' checked  name='remember'></input>Remember me</div>
      <div><button>Enter</button></div>
    </form>
    </div>
  )
}
