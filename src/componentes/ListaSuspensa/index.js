import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
  return (
    // criando as opções de time com o select para escolher
    <div className='lista-suspensa'>
      <label>{props.label}</label>
      {/* pegando o valor passado pelo usuário */}
      <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
        <option value="'"></option>
        {/* coloca key para não dar erro com o react, pois sem a key o react pode não saber quando renderizar denovo */}
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default ListaSuspensa