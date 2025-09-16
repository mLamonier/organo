import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Organizacao from './componentes/Organizacao';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFBA29'
    },
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Dev Front-End',
      imagem: "https://github.com/mlamonier.png",
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Dev Front-End',
      imagem: "https://github.com/mlamonier.png",
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Dev Front-End',
      imagem: "https://github.com/mlamonier.png",
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Dev Front-End',
      imagem: "https://github.com/mlamonier.png",
      time: 'Front-End'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Programador',
      imagem: "https://github.com/mlamonier.png",
      time: 'Programação'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Programador',
      imagem: "https://github.com/mlamonier.png",
      time: 'Programação'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Programador',
      imagem: "https://github.com/mlamonier.png",
      time: 'Programação'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Miguel',
      cargo: 'Programador',
      imagem: "https://github.com/mlamonier.png",
      time: 'Programação'
    },
  ])

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time;
    }))
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, {...colaborador, id: uuidv4()}]) ///'...colaboradores' esparrama os novos colaboradores junto com os antigos 
  }
  
  function cadastrarTime(novoTime){
    if(times.some(time => time.nome.toLowerCase() === novoTime.nome.toLowerCase())){
      alert('Já existe um time com este nome, escolha outro');
      return
    } else{
      setTimes([ ...times, { ...novoTime, id: uuidv4() }])
    }
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))

  }

  const [formularioVisivel, setFormularioVisivel] = useState(false);

  const trocarVisibilidade = () => {
    //prev é o nome inventado para o valor mais atualizado do estado, aqui está invertendo o valor anterior, que de inicio é false
    //deve ser passado uma função de retorno dentro do setter para o React entender que ele precisa renderizar novamente
    setFormularioVisivel(prev => !prev)
  }

  function deletarColaborador(id) {
    // aqui se cria um novo array sem o colaborador que foi clicado, dai quando o React renderiza, ele não aparece no novo array
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        times={times.map(time => ({ nome: time.nome, id: time.id }))}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        formularioVisivel={formularioVisivel}
        cadastrarTime={cadastrarTime}
      />
      <Organizacao trocarVisibilidade={trocarVisibilidade} />

      {times.map((time, index) =>
        <Time
          key={index}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />
      )}

      <Rodape />

    </div>
  );
}

export default App;
