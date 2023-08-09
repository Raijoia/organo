import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href="facebook.com" target='_blank'>
              <img src="./img/fb.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target='_blank'>
              <img src="./img/tw.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target='_blank'>
              <img src="./img/ig.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="./img/logo.png" alt="Logo da Organo" />
      </section>
      <section>
        <p>Desenvolvido por Rai.</p>
      </section>
    </footer>
  )
}

export default Rodape