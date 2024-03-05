import { createHash } from 'crypto';

function criahash(senha){
    return createHash('sha256').update(senha).digest('hex');
};

console.log(criahash("uma String qualquer"));

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criahash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criahash(senha)){
            console.log("Usuário autenticado com sucesso!");
            return true;
        }
        console.log("Usuário ou senha incorretos.");
        return false;
    }
};

const usuario = new Usuario('dominike righi', 'minhaSenha');

console.log(usuario);

//Caso de sucesso:
usuario.autentica('dominike righi', 'minhaSenha');

//Caso de fracasso:
usuario.autentica('dominike righi', 'minha');