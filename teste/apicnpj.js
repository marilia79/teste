const inputCnpj = document.getElementById("cnpj");
const form = document.querySelector("form")
const divResultado = document.querySelector(".resultado");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log("formulário foi submetido")
    let cnpj = inputCnpj.value;
    fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
    .then(dados => dados.json())
    .then(dados =>{

        console.log(dados);
        const prazao_social = document.createElement("p");
        const pdescricao_situacao_cadastral = document.createElement("p");
        const pcnae_fiscal_descricao = document.createElement("p");
        const pdescricao_tipo_de_logradouro = document.createElement("p");
        const plogradouro = document.createElement("p");
        const pnumero = document.createElement("p");
        const pbairro = document.createElement("p");
        const pcep = document.createElement("p");
        const puf =document.createElement("p"); 

        
        prazao_social.innerHTML = `Razão Social: ${dados.razao_social}`;
        pdescricao_situacao_cadastral.innerHTML = `Situação Cadastral: ${dados.descricao_situacao_cadastral}`;
        pcnae_fiscal_descricao.innerHTML = `CNAE: ${dados.cnae_fiscal_descricao}`;
        pdescricao_tipo_de_logradouro.innerHTML = `Logradouro: ${dados.descricao_tipo_de_logradouro}`;
        pnumero.innerHTML = `Número: ${dados.numero}`;
        pbairro.innerHTML = `Bairro: ${dados.bairro}`;
        pcep.innerHTML = `CEP : ${dados.cep}`;
        puf.innerHTML = `UF : ${dados.uf}`;

        divResultado.innerHTML= "";
        divResultado.appendChild(prazao_social);
        divResultado.appendChild(pdescricao_situacao_cadastral);
        divResultado.appendChild(pdescricao_tipo_de_logradouro);
        divResultado.appendChild(pnumero);
        divResultado.appendChild(pbairro);
        divResultado.appendChild(pcep);
        divResultado.appendChild(puf);

        
    })
    .catch(erro =>{
        console.log("erro");
        divResultado.innerHTML= "Não foi possível buscar este CNPJ. Tente novamente!";
    })
})