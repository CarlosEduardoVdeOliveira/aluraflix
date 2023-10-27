
export const idVideo = (link) =>{
  const firstPatternInLink = "https://www.youtube.com/watch?v="
  let reDot = link.slice(/[&]/g);
  const id = link.split(firstPatternInLink)
  console.log(reDot);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")