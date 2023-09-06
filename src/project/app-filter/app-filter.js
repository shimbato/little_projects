import React from "react";
import "./app-filter.css";

export const AppFilter = (props) => {
  const buttonData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "moreThen1000", label: "З/П больше 1000$" },
  ];
  const buttons = buttonData.map(({ name, label}) => {
    const active = props.filter === name; 
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button className={`btn ${clazz}`} 
               type="button" 
               key={name}
               onClick ={() => props.onFilterSelect(name)}>
        {label}
      </button>
    );
  });
  return (
    <div className="btn-group">
      {buttons}
      {/* <button 
            className='btn btn-light'
            type='button'>
                Все сотрудники
        </button>
        <button 
            className='btn btn-outline-light'
            type='button'>
                На повышение
        </button>
        <button 
            className='btn btn-outline-light'
            type='button'>
                З/П больше 1000$
        </button> */}
    </div>
  );
};
