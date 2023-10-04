/* eslint-disable react-refresh/only-export-components */

import React from 'react';
import {Table} from '../components/Table'
const CreatCategoryContext = React.createContext()

export function cotextCategory(){
  const editCategory = (id) =>{
    console.log(id);
  };
  const deleteCategory = (id) =>{
    console.log(id);
  };
  return(
    <CreatCategoryContext.Provider value={{editCategory, deleteCategory}}>
    <Table />
  </CreatCategoryContext.Provider> 
  )
}


