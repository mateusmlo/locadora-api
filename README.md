<p align="center"> Desenvolvido com:
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Descrição

Projeto desenvolvido conforme o [desafio](https://gist.github.com/lBrunol/5f2870294d3d5f24cfcb8cdb88d51504) proposto pela empresa [Envoy](https://envoy.tec.br/). Consiste de uma API Back-end simulando uma locadora de filmes, onde é possível listar (todos ou por ID), criar, atualizar, apagar filmes, e também alugar, listar e devolver locações por meio de endpoints REST. A API utiliza como banco de dados um arquivo sqlite presente na pasta db. Mais detalhes sobre o funcionamento da aplicação estarão em READMEs de cada pasta. É possível utilizar também npm.

## Consumindo a API
A documentação dos endpoints encontra-se publicada no [Postman](https://documenter.getpostman.com/view/8426603/TVRrWQsA). Os endpoints foram testados utilizando Postman, porém pode-se utilizar também outros softwares como Insomnia. Com o Postman, todos os endpoints podem ser utilizados [importando a coleção](https://drive.google.com/file/d/1pF2Y6GGhoO8lg9Xl1gRQLoOS38DgywNk/view?usp=sharing) a partir do arquivo que será baixado do meu Google Drive.

### Limitações
Devido a limitações do sqlite (não permite arrays em colunas), filmes e locações possuem uma relação 1:1, o que significa que há apenas um filme por pessoa, e um de cada filme disponível. Os filmes são alugados automaticamente por um período de 7 dias, podendo ser devolvidos antes.

## Desafios
O principal desafio no desenvolvimento desta API está no fato de eu ter precisado sair da minha zona de conforto, que consistia de utilizar Express, MongoDB e desenvolver sem seguir muitas patterns e arquiteturas. Como na descrição do desafio sugeriram o Nest.js, resolvi aprendê-lo, o que me tomou dois dos cinco dias disponíveis para entrega, visto que eu não era nada familiarizado com o *workflow* do framework, nem com Orientação a Objetos e também com TypeScript ou SQL; também aprendi a trabalhar e manipular datas utilizando Moment.js. Foi uma jornada de aprendizado incrível mas nem tão complicada devido às minhas experiências anteriores, e agora sinto que sou um desenvolvedor muito mais maduro do que era antes deste projeto. No código é possível encontrar design patterns como DTO (Data Transfer Object), Repositories (arquivo responsável pelas transações com o banco de dados), algumas patterns de Programação Funcional e a arquitetura empregada pelo próprio Nest, de Modules, Services e Controllers. 

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
