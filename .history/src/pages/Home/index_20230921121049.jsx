import Card from "../../components/Card";
import videos from "../../json/db.json"
const colorsCategories ={
  'font-end': '#6BD1FF',
  'back-end': '#69953B',
  'ux': '#DC6EBE',
  'infra': '#9CD33B',
  'marketing': '#6B5BE2',
  'data-science': '#9CD33B',
  'inovation': '#FF8C2A',
  'mobile': '#FFBA05',

}
// eslint-disable-next-line react/prop-types
function Home() {

  return (
    <>
      {
        colorsCategories.map(category =>{(
          videos.map(video=>{(
            video.category === category && <Card borderColor={category} />
          )})
        )})
      }
    </>
  )
}

export default Home
