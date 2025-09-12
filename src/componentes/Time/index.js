import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
    return (
        // aqui existe um operador ternário, onde, se o array colaboradores for maior que zero,
        // ele renderiza a section, caso não, ele retorna uma string vazia (não renderiza)
        (props.colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: hexToRgba(props.cor, '0.6'), backgroundImage: "url('./imagens/fundo.png')" }}>
            <input
                onChange={evento => props.mudarCor(evento.target.value, props.id)}
                value={props.cor}
                type='color'
                className='input-cor'
            />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.id}
                        id={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.cor}
                        aoDeletar={props.aoDeletar}
                    />
                )}
            </div>
        </section>
            : ''
    )
}

export default Time