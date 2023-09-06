import React from 'react'
import {useMatch, Link} from 'react-router-dom'

export const CustumLink = ({children, to, ...props}) => {
    const match = useMatch(to)
  return (
    <Link to ={to}
            style ={{
                color: match ? 'var(--color-active)' :'white',
            }}
            {...props} >
                {children}
            </Link>
  )
}
