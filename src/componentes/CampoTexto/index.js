import './campoTexto.css'

// pros => propriedade do componente
const CampoTexto = (props) => {

  const placeholdermodificado = `${props.placeholder}...`

  const aoDigitado = (evento) => {
    // pegando o valor passado pelo usuário
    props.aoAlterado(evento.target.value)
  }

  // () serve para retornar mais de uma linha
  return (
    <div className="campo-texto" >
      {/* {} ajuda a colocar argumentos no html
          pegando o valor do label passado pelo app
      */}
      <label>{props.label}</label>
      {/* se no parametro tiver obrigatorio = true, ativar o required */}
      {/* onChange => a cada mudança, a cada palavra digitada */}
      <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={placeholdermodificado} />
    </div>
  )
}

export default CampoTexto