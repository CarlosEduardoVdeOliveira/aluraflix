/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext} from 'react';
const CategoryContext = createContext();

export function CategoryContextProvider({children}) {

  const editCategory = (id) => {
    fetch(`http://localhost:3000/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  })
    .then(res => res.json())
  };

  const deleteCategory = (id) =>{
    fetch(`http://localhost:3000/categories/${id}`, {
    method: 'DELETE' })
    .then(res => res.json())
  }

  return (
    <CategoryContext.Provider value={{ editCategory, deleteCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext

/*
const findCategory = categories.find(category => category.id === id)
console.log(findCategory);
  fetch(`http://localhost:3000/categories/${findCategory}`, {
  method: 'DELETE' })
.then(res => res.json())
.then(data => setCategory(data)); */


