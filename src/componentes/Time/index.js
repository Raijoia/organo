import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
  return (
    // colocando css no "HTML", precisa colocar duas chaves({{}}) para entender que não é uma variável
    // props.colaboradores.length > 0 &&, é assim que se faz uma renderização condicional
    props.colaboradores.length > 0 && 
    <section className='time' style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} img={colaborador.imagem} /> )}
      </div>
    </section>
  )
}

export default Time