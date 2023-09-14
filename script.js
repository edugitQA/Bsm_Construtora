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

const mysql = require('mysql');

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: 'localhost\SQLEXPRESS',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'bsm_construcoes',
});

// ... (código anterior)

// Após armazenar no localStorage
// Insira os dados na tabela SQL
connection.connect();

const sql = `
    INSERT INTO servicos (nome, pix, profissao, metragem, tipoServico, data)
    VALUES (?, ?, ?, ?, ?, ?)
`;

connection.query(sql, [nome, pix, profissao, metragem, tipoServico, data], (error, results) => {
    if (error) {
        console.error('Erro ao inserir os dados no banco de dados:', error);
        throw error;
    }
    console.log('Dados inseridos com sucesso.');
});

connection.end();


