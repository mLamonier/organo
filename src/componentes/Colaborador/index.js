import { IoIosCloseCircle  } from 'react-icons/io';
import './Colaborador.css'

const Colaborador = ({ id, nome, imagem, cargo, corDeFundo, aoDeletar }) => {
    return (
        <div className='colaborador'>
            <IoIosCloseCircle
                style={{ cursor:'pointer' }}
                size={25} className='deletar'
                //sem arrow function ele executa a função toda vez que o componente é renderizado/visto (errado)
                //com arrow function só executa a função quando é clicado (certo)
                onClick={() => aoDeletar(id)} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador