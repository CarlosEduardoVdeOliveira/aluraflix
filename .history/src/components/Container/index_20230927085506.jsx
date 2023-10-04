import styles from './Container.module.css'
export const Container = () => {
  return(
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <Button 
              id={id}
              color="#fff" 
              bgColor={category.color} 
              onClick={()=> console.log(category.id)}
            >
                {category.name}
            </Button>
              <Carousel animation="slide" autoPlay >
                <div className={styles.videos}>
                  {videos.map(
                  (video) =>
                    category.name === video.category && (
                      <Card
                        link={video.link}
                        key={video.id}
                        thumbnail={video.thumbnail}
                        borderColor={category.color}
                        description={video.description}
                      />
                    )
                  )}
                </div>

              </Carousel>
          </section>
        ))
      }
    </>
  )
  
}