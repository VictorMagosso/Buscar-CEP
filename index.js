const cep = document.querySelector('#cep')

cep.addEventListener("blur", (evento)=> {
    
    let buscarCep = cep.value.replace('-','')  

    fetch (`https://viacep.com.br/ws/${buscarCep}/json/`)
        .then(retorno => retorno.json()
            .then(sucesso => criarCampos(sucesso))
                .catch(err => alert('Não deu certo :(' + err)) )
});

const criarCampos = (retorno) => {

        let campoLogradouro = document.createElement('input')
        campoLogradouro.setAttribute('type', 'text')
        campoLogradouro.setAttribute('value', retorno.logradouro)
        campoLogradouro.setAttribute('class', 'inputs')
        document.body.appendChild(campoLogradouro)

        let campoBairro = document.createElement('input')
        campoBairro.setAttribute('type', 'text')
        campoBairro.setAttribute('value', retorno.bairro)
        campoBairro.setAttribute('class', 'inputs')
        document.body.appendChild(campoBairro)

        let campoCidade = document.createElement('input')
        campoCidade.setAttribute('type', 'text')
        campoCidade.setAttribute('value', retorno.localidade)
        campoCidade.setAttribute('class', 'inputs')
        document.body.appendChild(campoCidade)

        let campoUf = document.createElement('input')
        campoUf.setAttribute('type', 'text')
        campoUf.setAttribute('value', retorno.uf)
        campoUf.setAttribute('class', 'inputs')
        document.body.appendChild(campoUf)

        let numero = document.createElement('input')
        numero.setAttribute('type', 'text')
        numero.setAttribute('placeholder', 'Número')
        document.body.appendChild(numero)

}