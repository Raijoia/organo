import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {


  // HOOK => para conseguir manter o estado dentro de uma função
  // o estado muda, e se o estado muda o react sabe que tem que renderizar aquilo denovo
  // setValor é a digitação, valor é o valor inteiro || useState("") é o valor inicial do valor
  // valor => setCargo(valor), muda o valor do valor pro valor do setCargo
  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")

  const aoSalvar = (evento) => {
    // passando como parâmetro oe evento para prevenir o padrão de dar reload na página, para a página não dar reload
    evento.preventDefault()

    // passando as informações do usuário para a função
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })

    // limpando o formulário após o envio
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  // neste return, retornamos outro código, concatenando a div deles no form
  return (
    <section className='formulario'>
      {/* quando botão for clicado, dar o submit */}
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        {/* passando parâmetro de componente */}
        <CampoTexto 
          required={true} 
          label='Nome' 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto 
          required={true} 
          label='Cargo' 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto 
          label='Imagem' 
          placeholder="Informe o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa 
          required={true}  
          label='Time' 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>
          {/* passando pro botão mas com a propriedade children */}
          Criar Card
        </Botao>
      </form>
    </section>
  )
}

export default Formulario