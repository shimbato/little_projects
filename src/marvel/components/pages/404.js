import React from 'react'
import { Link } from 'react-router-dom'
import ErrorMessage from '../errorMessage/ErrorMessage'

export const Page404 = () => {
  return (
    <div>
        <ErrorMessage />
        <p>Page doesn't exist </p>
        <Link to='/'>Back to main Page </Link>
    </div>
  )
}
export default Page404;