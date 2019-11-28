import config from './Config';

function getUser(nomeDoUsuario){
    const url = `/users/${nomeUsuario}`;
    return config.get(url);
}

function getRepos(nomeDoUsuario){
    const url = `/users/${nomeDoUsuario}/repos`
    return config.get(url);
}

export {getUser, getRepos};
