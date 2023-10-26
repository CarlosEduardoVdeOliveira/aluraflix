import {Container} from "../../components/Container";
import {categories} from '../../../db.json'
import { CategoryContextProvider } from "../../contexts/cotextCategory";

export const Home = () => {

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
