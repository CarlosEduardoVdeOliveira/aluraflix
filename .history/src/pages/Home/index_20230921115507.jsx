import Card from "../../components/Card";
import vidoes from '../../json/db.json'

// eslint-disable-next-line react/prop-types
function Home({category}) {

  return (
    <>
      {
        vidoes.map(video =>{(
          video.category === category ?    <Card  border='blue' /> : ""
        )})
      }
    </>
  )
}

export default Home
