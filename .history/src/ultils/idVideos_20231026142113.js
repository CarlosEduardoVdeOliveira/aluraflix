
export const idVideo = (link) =>{
  const firstPatternInLink = "https://www.youtube.com/watch?v="
  const id = link.slice(firstPatternInLink)
  console.log(id);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")