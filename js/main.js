document.getElementById('cadastrar').addEventListener('click',() => {

    //  Pegando valores dos inputs do formulário.
    const nomeEmpresa = document.getElementById('nome-empresa').value;  
    const cnpjEmpresa = document.getElementById('cnpj-empresa').value;
    const nomeUsuario = document.getElementById('nome-usuario').value;
    const cpfUsuario = document.getElementById('cpf-usuario').value;
    const emailUsuario = document.getElementById('email-usuario').value;
    const telefoneUsuario = document.getElementById('telefone-usuario').value;

    // Verificando preenchimento do formulário
    if(nomeEmpresa == "" || cnpjEmpresa == ""){
        alert('Falta preencher dados no formulário')
    }
    else{
        if(nomeUsuario == "" || cpfUsuario == "" || emailUsuario == ""){
            alert('Falta preencher dados no formulário')
        }
        else{
            preenchendoTabela()
        }
    };

    // Função que preenche a linha vazia da tabela com os dados informados.
    function preenchendoTabela(){
        // Indexando table, contando suas linhas como tamanho e indexando nova linha.
        const tabela = document.getElementById('tabela')
        const linhas = tabela.rows.length
        const linha = tabela.insertRow(linhas)

        // Identificando e indexando cédulas da tabela.
        var cellNomeUsuario = linha.insertCell(0)
        var cellEmailUsuario = linha.insertCell(1)
        var cellEmpresa = linha.insertCell(2)
        var cellGerarEmail = linha.insertCell(3)
        var cellLink = linha.insertCell(4)
        var cellArquivos = linha.insertCell(5)
        var cellConfirmacao = linha.insertCell(6)

        // Indicando conteúdo de cada cédula da tabela.
        cellNomeUsuario.innerHTML = nomeUsuario
        cellEmailUsuario.innerHTML = emailUsuario
        cellEmpresa.innerHTML = nomeEmpresa
        cellGerarEmail.innerHTML = `<button id="${linhas}" type="button" class="btn btn-primary">E-mail</button>`
        cellLink.innerHTML = `<button id="${linhas}" type="button" class="btn btn-warning">Link</button>`
        cellArquivos.innerHTML = `<button id="${linhas}" type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal${linhas}"> Inserir </button>
        <div id="modal${linhas}" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Arquivos</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Escolha Arquivos</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple>
                      </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button id="btnSalvarmodal${linhas}" type="button" class="btn btn-primary">Salvar</button>
                  </div>
            </div>
        </div>
        </div>
        `
        
        
        
        cellConfirmacao.innerHTML = `<select id="select${linhas}" class="form-select" aria-label="Default select example" disabled>
                                        <option value="1">Sim</option>
                                        <option value="2" selected>Não</option>
                                    </select>`

        // Resetando conteúdo do formulário.
        document.getElementById('nome-empresa').value = ""
        document.getElementById('cnpj-empresa').value = ""
        document.getElementById('nome-usuario').value = ""
        document.getElementById('cpf-usuario').value = ""
        document.getElementById('email-usuario').value = ""
        document.getElementById('telefone-usuario').value = ""
    }

});


// Metodo para inserir máscara de CPF
var cpf = document.getElementById('cpf-usuario')
cpf.addEventListener('change',() => {
    const cpfFormatA = cpf.value.split('')
    cpfFormatA.splice(3,0,'.')
    cpfFormatA.splice(7,0,'.')
    cpfFormatA.splice(11,0,'-')

    const cpfA = cpfFormatA.join('')

    document.getElementById('cpf-usuario').value = cpfA
});

// Metodo para inserir máscara de CNPJ
var cnpj = document.getElementById('cnpj-empresa')
cnpj.addEventListener('change',() => {
    const cnpjFormatA = cnpj.value.split('')
    cnpjFormatA.splice(2,0,'.')
    cnpjFormatA.splice(6,0,'.')
    cnpjFormatA.splice(10,0,'/')
    cnpjFormatA.splice(15,0,'-')

    const cnpjA = cnpjFormatA.join('')

    document.getElementById('cnpj-empresa').value = cnpjA
});

// Metodo para inserir máscara de telefone
var tel = document.getElementById('telefone-usuario')
tel.addEventListener('change',() => {
    const telFormatA = tel.value.split('')
    telFormatA.splice(0,0,'(')
    telFormatA.splice(3,0,')')
    telFormatA.splice(9,0,'-')

    const telA = telFormatA.join('')

    document.getElementById('telefone-usuario').value = telA
});