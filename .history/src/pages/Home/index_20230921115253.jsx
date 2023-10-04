import Card from "../../components/Card";
import vidoes from '../../json/db.json'

function Home({category}) {

  return (
    {
      vidoes.map(video =>{(
        video.category === category ?    <Card  /> : ""
      )})
    }
  )
}

export default Home
