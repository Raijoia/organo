import './Colaborador.css'

// desestruturando o props, ao invés de passar o props, abrimos o object no parâmetro e pegamos apenas os dados que queremos
const Colaborador = ({ nome, cargo, img, corDeFundo }) => {
  return (
    <div className='colaborador'>
      <div className='cabecalho' style={{backgroundColor: corDeFundo}} >
        <img src={img} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador