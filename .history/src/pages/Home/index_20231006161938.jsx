import {Container} from "../../components/Container";

import { useContext } from "react";
import CategoryContext from "../../contexts/cotextCategory";
import { VideoContextProvider } from "../../contexts/contextVideos";

export const Home = () => {
  const {categories} = useContext(CategoryContext)
  return (
    <>
      {
        <VideoContextProvider>
          <Container id={categories.map(category=> category.id)} /> 
        </VideoContextProvider>
      }
    </>
  )
}
