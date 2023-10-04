/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext} from 'react';
import {Table} from '../components/Table';
import {categories} from '../../db.json'

export const CategoryContext = createContext();

export function CategoryContextProvider({children}) {

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


/*
const findCategory = categories.find(category => category.id === id)
console.log(findCategory);
  fetch(`http://localhost:3000/categories/${findCategory}`, {
  method: 'DELETE' })
.then(res => res.json())
.then(data => setCategory(data)); */


