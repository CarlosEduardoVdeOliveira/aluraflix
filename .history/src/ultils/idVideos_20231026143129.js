
export const idVideo = (link) =>{
  const firstPatternInLink = "https://www.youtube.com/watch?v="
  let reDot = /[&]/g;
  const id = link.split(firstPatternInLink)
  console.log(id);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")