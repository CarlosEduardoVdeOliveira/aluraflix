import {Container} from "../../components/Container";
import {categories, videos} from '../../../db.json'

export const Home = () => {

  return (
    <>
      {
        <Container id={categories.map(category=> videos.map(video =>{
          video.category === category.name
        }))} />
      }
    </>
  )
}
