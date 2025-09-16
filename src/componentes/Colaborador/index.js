import { IoIosCloseCircle } from 'react-icons/io';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './Colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function favoritar(){ //foi criado para otimização do código e não ficar repetindo
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <IoIosCloseCircle
                style={{ cursor:'pointer' }}
                size={25} className='deletar'
                //sem arrow function ele executa a função toda vez que o componente é renderizado/visto (errado)
                //com arrow function só executa a função quando é clicado (certo)
                onClick={() => aoDeletar(colaborador.id)} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <FaHeart {...propsFavorito} color='#ff0000'/> 
                        : <FaRegHeart {...propsFavorito}/> //para passar um objeto inteiro como propriedade fazemos desta forma utilizando reticências
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador