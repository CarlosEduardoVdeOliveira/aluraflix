/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
const CategoryContext = createContext();
const baseUrlApi = "https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api"

export function CategoryContextProvider({children}) {
  const [categories, setCategories] = useState([{}])
  const [vidoes, setVideos] = useState([{}])
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
      fetch(`${baseUrlApi}/categories`)
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error("Erro durante a fetch:", error));
    },[])
    useEffect(()=>{
      fetch(`${baseUrlApi}/videos`)
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(error => console.error("Erro durante a fetch:", error));
    },[])
  
    const deleteCategory = (id) =>{
    fetch(`${baseUrlApi}/categories/${id}`, {
    method: 'DELETE' })
    .then(res => res.json())
  }

  return (
    <CategoryContext.Provider value={{
      deleteCategory,
      categories,
      setCategories,
      vidoes,
      setVideos
    }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext

