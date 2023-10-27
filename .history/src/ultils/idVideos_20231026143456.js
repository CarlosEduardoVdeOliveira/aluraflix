
export const idVideo = (link) =>{
  const firstPatternInLink = "https://www.youtube.com/watch?v="
  const reDot = link.split(/[&]/g, '');
  const id = link.split(firstPatternInLink)
  console.log(reDot, id);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")