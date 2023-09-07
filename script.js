function registrarServico() {
   
    const localStorageKey = 'BSM-Contrucoes'
    //recuperando os dados do localStorage
    const dadosArmazenados = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    

    const nome = document.getElementById("funcionarioBsm").value;
    const profissao = document.getElementById("profissaoBsm").value;
    const pix = document.getElementById("pixbsm").value;
    const metragem = document.getElementById("metros").value;
    const tipoServico = document.getElementById("servicoBsm").value;
    const data = document.getElementById("date").value;

    // Validação dos campos
    if (!nome ||!pix ||!profissao || !metragem ||!tipoServico ||!data) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    //criando um objeto com os dados do serviço
    const novoServico = {
        nome: nome,
        pix: pix,
        profissao: profissao,
        metragem: metragem,
        tipoServico: tipoServico,
        data:data
    };
    console.log(novoServico)

    //adicionando o novo serviço aos dados de armazenamento
    dadosArmazenados.push(novoServico)

    //Armazenando os dados atualizados no localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(dadosArmazenados));

    // Exibindo os resultados na div de resultado

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p>Nome do Funcionário: ${nome}</p>
        <p>pix: ${pix}</p>
        <p>Função: ${profissao}</p>
        <p>Tipo de Serviço: ${tipoServico}</p>
        <p>Metragem: ${metragem}</p>
        <p>Data do Serviço: ${data}</p>
    `;
}

