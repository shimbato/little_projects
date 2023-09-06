import React from 'react'
import './app-info.css'
export const AppInfo = ({employees, increased}) => {
  return (
    <div className='app-info'>
        <h1>Учет сотрудников в компании N</h1>
        <h2>Общее число сотрудников: {employees}</h2>
        <h3>Премию получат: {increased}</h3>
    </div>
  )
}
