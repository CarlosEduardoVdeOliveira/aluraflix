
export const idVideo = (link) =>{
  const rgx = link.find(/[&]/g)
  const firstPatternInLink = "https://www.youtube.com/watch?v="
  const include = link.includes(firstPatternInLink)
  const reDot = link.split(firstPatternInLink);
  const id = link.split(firstPatternInLink)
  console.log( rgx);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")