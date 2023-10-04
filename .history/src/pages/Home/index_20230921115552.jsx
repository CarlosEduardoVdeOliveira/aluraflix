import Card from "../../components/Card";
import vidoes from '../../json/db.json'

// eslint-disable-next-line react/prop-types
function Home({category}) {

  return (
    <>
      {
        vidoes.map(video =>{(
          <Card  border='blue' key={video.id} />
        )})
      }
    </>
  )
}

export default Home
