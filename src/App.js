import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
//import backgroundImage from './assets/background.jpg';
import api from './services/api';

//useEffect --> disparar funções sempre que alguma coisa for alterada ou assim que o componente for exibido em tela

/**
 * Componente
 * Propriedade - alguma informação que podemos passar de um componente pai para um componente filho
 * Estado e Imutabilidade (garantir performance mesmo em aplicações que contenham muitos dados) 
 */

//Criando componente
//Toda vez que criar um componente, letra maiúscula, e a função também
//Componente - função que retorna HTML
var counter = 0;
function App() {
  //useState sempre tem que ter o tipo igual da variável - array
  const [projects, setProjects] = useState([]);

  //2 parâmetros
  //1 - Qual função eu quero disparar
  //2 - Quando eu quero disparar

  //se eu quisesse disparar toda vez que adicionasse um projeto no projects, colocaria no segundo parâmetro a variável projects
  //se eu quisesse que a função fosse disparada apenas 1 vez quando o componente fosse mostrado em tela, passaria o array vazio
  //não dá pra usar async await
  useEffect(() => {
    api.get('projects').then(response => {
      // console.log(response.data);
      setProjects(response.data);
      //  response.data.map(project => setProjects([...projects], project));
    });
  }, []);

  //useState - retorna um array com 2 posições
  //1. Variável com o seu valor 
  //2. Função para atualizarmos esse valor

  //começar funções de ação do usuário com handle
  async function handleAddProject() {
    // projects.push(`New project ${Date.now()}`);

    /**Conceito de imutabilidade
     * Não podemos mudar variáveis, adicionar coisas dentro
     * Devemos sempre recriá-las*/
    //...projects -> copiando array de projetos 
    counter += 1;
    //setProjects([...projects, `Novo projeto ${counter}`]);
    //  console.log(projects);

    // setProjects([...projects, {id: counter, title: `Novo projeto ${counter}`, owner: 'Rebeca Alves'}]);
    // api.post('projects', {
    //   title: `Novo projeto ${counter}`,
    //   owner: "Rebeca Alves"
    // }).then(response => {
    //   setProjects([...projects, response.data]);
    // });

    const response = await api.post('projects', {
      title: `Novo projeto ${counter}`,
      owner: "Rebeca Alves"
    });


    const project = response.data;

    setProjects([...projects, project]);




  }

  return (
    //Para ter dois elementos um embaixo do outro, deve-se envolver com algo, tipo uma div
    //Conceito fragment - quando quero envolver componentes sem declarar mais uma tag (usando então <> </>)
    <>
      {/* <Header title="HomePage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>Profile</li>
        </ul>
      </Header> */}

      <Header title="Projects" />
      { /* <img width={300} src={backgroundImage}/> */}
      <ul>
        {/* é necessário no primeiro elemento, informar uma key única*/}
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;