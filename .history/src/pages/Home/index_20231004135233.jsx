import {Container} from "../../components/Container";
import {categories} from '../../../db.json'

export const Home = () => {

  return (
    <>
      {
        <Container id={categories.map(category=> category.id)} />
      }
    </>
  )
}
