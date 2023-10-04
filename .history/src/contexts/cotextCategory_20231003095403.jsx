import React from 'react';
import {Table} from '../components/Table';

const CategoryContext = React.createContext();

export function CategoryContextProvider() {
  const editCategory = (id) => {
    console.log(id);
  };

  const deleteCategory = (e) => {
    console.log(e.target.value);
  };

  return (
    <CategoryContext.Provider value={{ editCategory, deleteCategory }}>
      <Table />
    </CategoryContext.Provider>
  );
}

export default CategoryContext;



