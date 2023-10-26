import {Container} from "../../components/Container";

import { CategoryContext } from "../../contexts/cotextCategory";
import { useContext } from "react";

export const Home = () => {
  const {categories} = useContext(CategoryContext)
  return (
    <>
      {
        <CategoryContextProvider >
          <Container id={categories.map(category=> category.id)} />
        </CategoryContextProvider>
      }
    </>
  )
}
