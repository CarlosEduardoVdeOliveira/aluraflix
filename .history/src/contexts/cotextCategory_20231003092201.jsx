/* eslint-disable react-refresh/only-export-components */
import createContext from "react";
import {Table} from '../components/Table'
const CreatCategoryContext = createContext()

export function cotextCategory(){
  const editCategory = (id) =>{
    console.log(id);
  };
  const deleteCategory = () =>{

  };
  return(
    <CreatCategoryContext.Provider value={{editCategory, deleteCategory}}>
      <Table />
    </CreatCategoryContext.Provider>
  )
}


