import { AboutCard } from '../common/Cards/Cards'
import './About.css'
import firstCardImg from '../../assets/about-area/first.svg'
import defaultCardImg from '../../assets/about-area/default.svg'

export function About() {

  const defaultCard = {
    "image": defaultCardImg,
    "source": {
      "imageLink": "https://www.freepik.es/vector-gratis/ilustracion-concepto-cerebro-curiosidad_30576698.htm#&position=11&from_view=author&uuid=983d0324-4b8e-4275-a66b-c79c209892af",
      "author": "storyset",
      "host": "Freepik"
    },
    "description": "Estamos trabajando en nuevas ideas. ¡No te las pierdas!"
  }

  const firstCard = {
    "image": firstCardImg,
    "source": {
      "imageLink": "https://www.freepik.es/vector-gratis/ilustracion-concepto-nombres-dominio_9933418.htm#fromView=image_search_similar&track=&regularType=vector&page=1&position=6&uuid=20fc820a-1244-48df-9bba-f3fb25a7d681",
      "author": "storyset",
      "host": "Freepik"
    },
    "description": "Acortamos enlaces sin complicaciones. Tan solo inserta tu enlace y nosotros hacemos el resto. ¡Totalmente gratis y sin registrarte!"
  }



  return (
    <section id="about-area">
      <h2>¿Qué es <em>Petit</em>?</h2>
      <div className="container">
        <AboutCard description={firstCard.description} image={firstCard.image} imageSource={firstCard.source} />
        <AboutCard description={defaultCard.description} image={defaultCard.image} imageSource={defaultCard.source} />
      </div>
    </section>
  )
}