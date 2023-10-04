import {Container} from "../../components/Container";
import {categories} from '../../../db.json'

// eslint-disable-next-line react/prop-types
export const Home = () => {

  return (
    <>
      {
        <Container id={categories.map(category=> category.id)} />
      }
    </>
  )
}
