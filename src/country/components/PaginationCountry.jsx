import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { number } from 'yup';

export const PaginationCountry = ({countriesPerPage, totalCountries, paginate}) => {
    const pageNumber = []

    for  (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++){
        pageNumber.push(i)
    }
  return (
    <div>

        <ul className='pagination'>
            {
                pageNumber.map(number => (
                    <li className='page-link' key={number}>
                        <a href='!#' onClick={()=> paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))
            }
        </ul>
      {/* <Pagination count={number} variant="outlined" shape="rounded">
        {pageNumber.map(number =>(
            {number}
        ))}
      </Pagination> */}
    </div>
  )
}
