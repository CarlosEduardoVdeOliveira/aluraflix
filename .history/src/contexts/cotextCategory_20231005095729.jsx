/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
const CategoryContext = createContext();

export function CategoryContextProvider({children}) {
  const [categories, setCategories] = useState({})
  /* const editCategory = (id, name, description, color) => {
    fetch(`http://localhost:3000/categories/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name, description, color}),
  })
    .then(res => res.json())
    .then(data => setCategory(data))
    return category
  }; */

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api/categories")
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.error("Erro durante a fetch:", error));
  }, [categories])
  console.log(categories);
  const deleteCategory = (id) =>{
    fetch(`http://localhost:3000/categories/${id}`, {
    method: 'DELETE' })
    .then(res => res.json())
  }

  return (
    <CategoryContext.Provider value={{ deleteCategory, categories }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext

