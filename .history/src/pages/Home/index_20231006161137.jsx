import {Container} from "../../components/Container";

import { useContext } from "react";
import CategoryContext from "../../contexts/cotextCategory";

export const Home = () => {
  const {categories} = useContext(CategoryContext)
  return (
    <>
      {
        <Container id={categories.map(category=> category.id)} /> 
      }
    </>
  )
}
