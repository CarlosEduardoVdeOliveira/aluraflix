
export const idVideo = (link) =>{
  const rgx = /[&]/g
  const firstPatternInLink = "https://www.youtube.com/watch?v="
  const include = link.includes(rgx)
  const reDot = link.split(firstPatternInLink);
  const id = link.split(firstPatternInLink)
  console.log( reDot);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")