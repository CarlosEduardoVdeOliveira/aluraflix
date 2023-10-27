
export const idVideo = (link) =>{
  const firstPattern = "https://www.youtube.com/watch?v="
  const removeFirstPattern = link.split(firstPattern)
  
  console.log(removeFirstPattern);
}
idVideo("https://www.youtube.com/watch?v=F608hzn_ygo&t=107s&ab_channel=FilipeDeschamps")