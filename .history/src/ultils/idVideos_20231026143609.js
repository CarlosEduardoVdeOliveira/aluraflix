
export const idVideo = (link) =>{
  const firstPatternInLink = "https://www.youtube.com/watch?v="
  const rgx = /[&]/g
  const reDot = link.split(rgx, '');
  const id = link.split(firstPatternInLink)
  console.log( reDot);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")