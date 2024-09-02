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