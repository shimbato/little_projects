import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Countries, Country } from './components/Country'
import { PaginationCountry } from './components/PaginationCountry'

export const AppCountry = () => {

    const [countries, setCountries] =useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(10)

  
    useEffect(()=> {
      const getCountries = async () => {
        setLoading(true)
        const res =  await axios.get('https://restcountries.com/v3.1/all')
        setCountries(res.data)
        setLoading(false)
    }
        getCountries()
    }, [])
   
    const lastCountryIndex = currentPage * countriesPerPage;

    const firstCounryIndex = lastCountryIndex - countriesPerPage;

    const currentCountry = countries.slice(firstCounryIndex, lastCountryIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)


  return (
    <div className='container mt-5'>
        <h1 className='text-primary'>Country</h1>
        <Countries  countries={currentCountry} loading={loading}/>
        <PaginationCountry 
          countriesPerPage={countriesPerPage}
          totalCountries={countries.length}
          paginate={paginate}/>
        
        <button onClick={prevPage}>prev page</button>
        <button onClick={nextPage}>next page</button>
    </div>
  )
}
