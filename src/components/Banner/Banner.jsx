import bannerImage from '../../assets/banner-image.svg'
import './Banner.css'

export function Banner(){
  return(
    <section id='banner'>
      <img className='banner-img' src={bannerImage} alt="" />
      <h1 className='banner-title'>Petit</h1>
      <p>Acorta tus imágenes de manera rápida y gratuita.</p>
    </section>
  )
}