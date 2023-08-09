// linkando o css
import './banner.css'

function Banner() {
  // JSX
  return (
    // ussa className pois class é uma palavra reservada do javascript, então usando className para não dar problema
    <header className='banner'>
      {/* pega da raiz principal do projeto */}
      <img src="./img/banner.png" alt="Banner principal da página do Organo" />
    </header>
  )
}

export default Banner