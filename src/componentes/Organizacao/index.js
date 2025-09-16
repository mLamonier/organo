import './Organizacao.css'

const Organizacao = (props) => {

    return (
        <section className='organizacao'>
            <h2>Minha Organização</h2>
            <img src='./imagens/botao_add.png' alt='botão de ocultar formulário' onClick={props.trocarVisibilidadeForm} />
        </section>
    )
}

export default Organizacao