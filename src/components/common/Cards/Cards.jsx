import './Cards.css'

export function AboutCard({ image, imageSource, description }) {
  return (
    <article className='about-card'>
      <p className="about-card-description">
        {description}
      </p>
      <figure>
        <img src={image} alt="" className="about-card-image" />
        <figcaption>
          <a href={imageSource.imageLink}>Imagen de {imageSource.author}</a> en {imageSource.host}.
        </figcaption>
      </figure>
    </article>
  )
}