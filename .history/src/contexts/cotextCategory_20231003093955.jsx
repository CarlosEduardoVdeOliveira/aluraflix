import React from 'react';
import {Table} from '../components/Table';

const CategoryContext = React.createContext();

export function CategoryContextProvider() {
  const editCategory = (id) => {
    console.log(id);
  };

  const deleteCategory = (id) => {
    console.log(id);
  };

  return (
    <CategoryContext.Provider value={{ editCategory, deleteCategory }}>
      <Table />
    </CategoryContext.Provider>
  );
}

export default CategoryContext;



