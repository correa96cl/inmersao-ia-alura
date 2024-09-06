const checkbox = document.getElementById('tema-escuro');
const link = document.createElement('link');
link.rel = 'stylesheet';
link.id = 'tema';

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    link.href = 'style-oscuro.css';
  } else {
    link.href = 'style-claro.css';
  }
  document.head.appendChild(link);
});

// Carregar o estilo inicial (você pode ajustar para o tema padrão)
link.href = 'style-claro.css';
document.head.appendChild(link);

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  const inputDoenca = document.getElementById("doenca");
  // Selecionar todos os elementos <p>





  if (inputDoenca.value != "") {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((p) => {
      if (p.ariaLabel == "validar") {
        p.remove();
      }
    });
    inputDoenca.removeAttribute("style");

    
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Cria um novo elemento HTML para cada resultado
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      console.log(dado.tags)
      tags = dado.tags.toLowerCase()
      if (titulo.includes(inputDoenca.value.toLowerCase()) 
        || descricao.includes(inputDoenca.value.toLowerCase()) || tags.includes(inputDoenca.value.toLowerCase())) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
      }
     
    }
    if (!resultados){
      resultados += `
      <p style="color: #45474B; margin: 0 0 10px 0">Nenhum resultado encontrado</p>`
    }
    section.innerHTML = resultados;
  } else {
    const paragraphs = document.querySelectorAll('p');

    paragraphs.forEach((p) => {
      if (p.ariaLabel == "validar") {
        p.remove();
      }
    });
    const novoParagrafo = document.createElement("p");

    inputDoenca.style.border = "1px solid red";
    novoParagrafo.ariaLabel = "validar";
    novoParagrafo.style.color = "indianred";
    novoParagrafo.style.margin = "0 0 10px 0";
    novoParagrafo.textContent = "Deve preencher com um nome de doenca.";
    inputDoenca.parentNode.insertBefore(novoParagrafo, inputDoenca.nextSibling);


  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}


function cambiarTema(tema) {
  const link = document.getElementById('estilo');
  link.href = tema === 'claro' ? 'style-claro.css' : 'style-oscuro.css';
}

// Detectar la hora del día y cambiar el tema automáticamente (opcional)
const hora = new Date().getHours();
console.log(hora);
if (hora >= 14 || hora < 6) {
  cambiarTema('oscuro');
}

function toggleCSS() {
  const estilo = document.getElementById('estilo');
  const checkbox = document.getElementById('toggleEstilo');

  if (checkbox.checked) {
    estilo.href = "style-claro.css";
  } else {
    estilo.href = "style-oscuro.css";
  }
}