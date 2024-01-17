import bannerImage from '../../assets/banner-image.svg'
import './Banner.css'

export function Banner(){
  return(
    <section id='banner'>
      <img className='banner-img' src={bannerImage} alt="" />
    </section>
  )
}