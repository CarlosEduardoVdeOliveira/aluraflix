import createContext from "react";
import {Table} from '../components/Table'
const CreatCategoryContext = createContext()

export function cotextCategory(){
  const edit = () =>{
    
  }
  const delete = () =>{

  }
  return(
    <CreatCategoryContext.Provider value={{edit, delete}}>
      <Table />
    </CreatCategoryContext.Provider>
  )
}


