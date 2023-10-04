/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {Table} from '../components/Table';
import {categories} from '../../db.json'

export const CategoryContext = React.createContext();

export function CategoryContextProvider({children}) {
  const [category, setCategory] = useState()
  const editCategory = (id) => {
    console.log(id);
  };

  const deleteCategory = (id) =>{
    console.log(id);
  }

  return (
    <CategoryContext.Provider value={{ editCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}





