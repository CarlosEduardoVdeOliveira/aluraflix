import {Container} from "../../components/Container";

/* import { useContext } from "react";
import CategoryContext from "../../contexts/contextCategory"; */
import { VideoContextProvider } from "../../contexts/contextVideos";

export const Home = () => {
  //const {categories} = useContext(CategoryContext)
  return (
    <>
      {
        <VideoContextProvider>
          <Container  /> 
        </VideoContextProvider>
      }
    </>
  )
}
