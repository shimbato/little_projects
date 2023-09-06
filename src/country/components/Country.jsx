import React from "react";

export const Countries = ({ countries, loading}) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }


  return (
    <div>
      <ul  className ='list-group' style={{textDecoration: 'none', listStyle: 'none'}}>
        {countries.map((country) => (
          <li className ='list-group-item' key={country.ccn3} >{country.name.common}
          <img src={country.flag}/>
          </li>
        ))}
  </ul>
    </div>
  );
};
