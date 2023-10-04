/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useState} from 'react';
const CategoryContext = createContext();

export function CategoryContextProvider({children}) {
  const [category, setCategory] = useState([])
  const editCategory = (id, name, description, color) => {
    fetch(`http://localhost:3000/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, description, color}),
  })
    .then(res => res.json())
    .then(data => setCategory(data))
    
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

