import React, { Component } from "react";

import { AppFilter } from "../app-filter/app-filter";
import { AppInfo } from "../app-info/app-info";
import { EmployersAddForm } from "../employers-add-form/employers-add-form";
import { EmployersList } from "../employers-list/employers-list";
import { SearchPanel } from "../search-panel/search-panel";

import "./app.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: '',
      filter: 'all',
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
}

// приходила аргумент 1- строчка поиска/ 2- фильтр
searchEmp = (items, term) => {
  if (term.length === 0) { // если строчка ничего не будет содержать/ то возвращаем то что придет 
    return items;
  }

  return items.filter(item => {  
    return item.name.indexOf(term) > -1 // от фильтровать  пытаемся найти кусочек строки
  })
}

// обновление поиска , 

onUpdateSearch = (term) => {
  this.setState({term});
}

//
filterPost = (items, filter) => {
  switch (filter) {
    case 'rise':
      return items.filter(item => item.rise);
    case 'moreThen1000':
      return items.filter( item => item.salary > 1000);
    default: 
      return items
  }
}

onFilterSelect = (filter) => {
  this.setState({filter});
}

  render() {
    const {data, term, filter}=this.state  //синтаксис диструктиризации
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);// double filter // приходит массив отфильтрованный который приходит от строчек 
   
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
          <AppFilter filter ={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
