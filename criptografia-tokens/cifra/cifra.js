const mensagemSecreta = "minhamensagemsecreta";

console.log(mensagemSecreta);

function cifraMensagem(mensagem, movimento){
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode( codigoCaractere + movimento)
    });

    return mensagemCifrada.join('');
};

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);
console.log(mensagemCifrada);

function decifraMensagem(mensagem, movimento){
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode( codigoCaractere - movimento)
    });

    return mensagemCifrada.join('');
};

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);
console.log(mensagemDecifrada);


//Exemplo de cifrar uma mensagem.
//Cifra de César 