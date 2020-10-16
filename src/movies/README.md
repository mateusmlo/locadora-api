
# Movies

Pasta onde se encontra toda a lógica responsável pelas operações CRUD com filmes. 

### Movies.module
Módulo responsável por agrupar todas as responsabilidades relacionadas aos filmes, expondo às classes funcionalidades necessárias para o funcionamento da aplicação.

### Movies.service
Nesta classe concentra-se a lógica de transação entre cliente/servidor, chamada também de business logic. Tem como dependência injetada o arquivo Movie.repository, com o qual divide responsabilidades.

### Movies.controller
Classe responsável por mapear as devidas rotas e métodos HTTP aos métodos providos pela classe de serviço, que é uma dependência injetada por meio do constructor.

### Movie.repository
Classe responsável por realizar transações com o banco de dados, as quais podem ser verbosas e eventualmente atrapalhar a legibilidade dos métodos do Service.

### Movie.entity
Classe responsável por definir a entidade Movie e suas propriedades, dando forma à tabela e suas colunas.

> Written with [StackEdit](https://stackedit.io/).
