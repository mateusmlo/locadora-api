<p align="center"> Desenvolvido com:
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center"></p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Projeto desenvolvido conforme o [desafio](https://gist.github.com/lBrunol/5f2870294d3d5f24cfcb8cdb88d51504) proposto pela empresa [Envoy](https://envoy.tec.br/). Consiste de uma API Back-end simulando uma locadora de filmes, onde é possível listar (todos ou por ID), criar, atualizar, apagar filmes, e também alugar, listar e devolver locações por meio de endpoints REST. A API utiliza como banco de dados um arquivo sqlite presente na pasta db. Mais detalhes sobre o funcionamento da aplicação estarão em READMEs de cada pasta.

## Desafios
O principal desafio no desenvolvimento desta API esteve no fato de eu ter precisado sair completamente da minha zona de conforto, que consistia de utilizar Express, MongoDB e desenvolver sem seguir muitas patterns e arquiteturas. Como na descrição do desafio sugeriram o Nest.js, resolvi aprendê-lo, o que me tomou dois dos cinco dias disponíveis para entrega, visto que eu não era nada familiarizado com o *workflow* do framework, nem com Orientação a Objetos e também com TypeScript ou SQL. Foi uma jornada de aprendizado incrível mas nem tão complicada devido às minhas experiências anteriores. No projeto é possível encontrar design patterns como DTO (Data Transfer Object), Repositories (arquivo responsável pelas transações com o banco de dados), e o sistema empregado pelo próprio Nest, de Modules, Services e Controllers. 

## Instalação

```bash
$ npm install
```

## Rodando a API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](LICENSE).
