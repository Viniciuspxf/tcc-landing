import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="plano_de_trabalho.pdf" target="_blank">Proposta</a></li>
          <li><a href="https://docs.google.com/presentation/d/1NtRxMMlg492wJPy94xc5aKSqLqpRQGp-N0fUD4acY8M/edit?usp=sharing" target="_blank">Apresentação</a></li>
          <li><a href="tese.pdf" target="_blank">Monografia</a></li>
          <li><a href="https://docs.google.com/presentation/d/10hnNX6dgUKo1be4YXLODNFsWIhM8mgbZum2mrEFjdcY/edit?usp=sharing" target="_blank">Pôster</a></li>
          <li><a href="https://github.com/the-sortinghat/pattern-detector/" target="_blank">Repositório</a></li>
        </ul>
      </nav>
      <main>
        <article>
          <hgroup>
            <h1>Integração do Sorting Hat com usVision</h1>
            <h3>Orientador: Prof. Dr. Eduardo Guerra (unibz)</h3>
            <h3>Co-orientador: MSc. João Francisco Lino Daniel (unibz)</h3>
          </hgroup>
          
          <p>
            A Arquitetura de Microsserviços (MSA) é amplamente adotada na engenharia de software. Contrapondo o monolito, ela propõe que o sistema seja dividido em microsserviços disponibilizados independentemente. Isso permite que uma única aplicação seja feita usando diferentes tecnologias em cada microsserviço, como bibliotecas, arcabouços, e até mesmo linguagens de programação. Como consequência, as aplicações que seguem a MSA são de alta complexidade, desafiando compreensão e depuração.
          </p>
          <p>
            Para auxiliar o desenvolvimento ou até mesmo melhorar o desempenho de um software, é preciso evitar más práticas de arquitetura de microsserviços, avaliando as aplicações frequentemente. Atualmente, existem ferramentas que avaliam ou controlam questões específicas (ferramenta que limita o número de operações públicas de um serviço que utiliza determinado arcabouço, por exemplo). A usVision, por outro lado, foca-se na detecção de padrões e mau-cheiros de MSA, e pode ser utilizada para avaliar aplicações com diversas tecnologias por guiar-se apenas por métricas.
          </p>
          <p>
            Atualmente, a usVision depende que seu banco de dados já esteja populado para funcionar. Com este trabalho, propõe-se dar suporte à inserção de dados na usVision, bem como estender seu escopo para evolucionabilidade. Como resultado, espera-se um módulo de inserção de dados por meio de uma interface gráfica. Isso porque se almeja integrar usVision ao SortingHat, uma ferramenta de visualização de arquiteturas distribuídas. Por fim, espera-se que este trabalho contribua como um modelo de integração assíncrona e distribuída de sistemas.
          </p>
      
        </article>
      </main>
    </>
  );
}

export default App;
