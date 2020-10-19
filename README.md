<p align="center"> Desenvolvido com:
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Descrição

Projeto desenvolvido conforme o [desafio](https://gist.github.com/lBrunol/5f2870294d3d5f24cfcb8cdb88d51504) proposto pela empresa [Envoy](https://envoy.tec.br/). Consiste de uma API Back-end simulando uma locadora de filmes, onde é possível listar (todos ou por ID), criar, atualizar, apagar filmes, e também alugar, listar e devolver locações por meio de endpoints REST. A API utiliza como banco de dados um arquivo sqlite presente na pasta db. Mais detalhes sobre o funcionamento da aplicação estarão em READMEs de cada pasta. É possível utilizar também npm.

## Consumindo a API
A documentação pode ser encontrada [aqui](https://documenter.getpostman.com/view/8426603/TVRrWQsA). Os endpoints foram testados utilizando Postman, porém pode-se utilizar também outros softwares como Insomnia. Caso utilizar Postman, todos os endpoints podem ser testados [importando a coleção](https://drive.google.com/file/d/1pF2Y6GGhoO8lg9Xl1gRQLoOS38DgywNk/view?usp=sharing) a partir do arquivo que será baixado do meu Google Drive.

## Desafios
O principal desafio no desenvolvimento desta API está no fato de eu ter precisado sair da minha zona de conforto, que consistia de utilizar Express, MongoDB e desenvolver sem seguir muitas patterns e arquiteturas. Como na descrição do desafio sugeriram o Nest.js, resolvi aprendê-lo, o que me tomou dois dos cinco dias disponíveis para entrega, visto que eu não era nada familiarizado com o *workflow* do framework, nem com Orientação a Objetos e também com TypeScript ou SQL. Foi uma jornada de aprendizado incrível mas nem tão complicada devido às minhas experiências anteriores. No projeto é possível encontrar design patterns como DTO (Data Transfer Object), Repositories (arquivo responsável pelas transações com o banco de dados), algumas patterns de Programação Funcional, como o isolamento de funções encadeadas em uma função só (passando o resultado de uma para a outra), e o sistema empregado pelo próprio Nest, de Modules, Services e Controllers. 

## Instalação

```bash
$ yarn add
```

## Rodando a API

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Test

```bash
# unit tests
$ yarn test

```

## License

  Nest is [MIT licensed](LICENSE).
