import { GrLinkedin, GrGithub } from 'react-icons/gr'
import './Footer.css'

export function Footer() {
  return (

    <footer>
      <span>Developed by <a href='https://www.csanbar.es/'>Cristian Sánchez</a></span>
      <section className="footer-icons">
        <a href="https://github.com/csanbardev/petit-url"><GrGithub size='1.5rem' /></a>
        <a href="https://www.linkedin.com/in/cristian-sanchez-barba/"><GrLinkedin size='1.5rem' /></a>
      </section>
    </footer>

  )
}