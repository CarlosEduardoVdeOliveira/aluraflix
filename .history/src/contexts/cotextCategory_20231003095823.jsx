import React, { useState } from 'react';
import {Table} from '../components/Table';
import {categories} from '../../db.json'

const CategoryContext = React.createContext();

export function CategoryContextProvider() {
  // const [category, setCategory] = useState()
  const editCategory = (id) => {
    console.log(id);
  };

  const deleteCategory = (id) =>{
    const findCategory = categories.find(category => category.id === id)
    fetch(`http://localhost:3000/categories/${findCategory}`, {
      method: 'DELETE' })
    .then(res => console.log(res));
    
  }

  return (
    <CategoryContext.Provider value={{ editCategory, deleteCategory }}>
      <Table />
    </CategoryContext.Provider>
  );
}

export default CategoryContext;



