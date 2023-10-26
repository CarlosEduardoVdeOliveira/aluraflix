import {Container} from "../../components/Container";

import { useContext } from "react";
import CategoryContext, { CategoryContextProvider } from "../../contexts/cotextCategory";

export const Home = () => {
  const {categories} = useContext(CategoryContext)
  return (
    <>
      {
        <CategoryContextProvider>
          <Container id={categories.map(category=> category.id)} />
        </CategoryContextProvider>
        
      }
    </>
  )
}
