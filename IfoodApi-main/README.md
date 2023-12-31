## :fries: FoodExplorer - Back-end
> Este projeto é um cardápio digital para um restaurante fictício.

![Capa](https://i.imgur.com/5SJvIpb.png)

### :computer: Sobre
Este é o backend do Desafio final do programa do [Explorer Rocketseat](https://www.rocketseat.com.br/explorer).

Essa aplicação simula um restaurante fictício, onde os usuários podem se cadastrar e logar.

Tendo um usuário ADMIN que pode: Adicionar pratos, ingredientes, atualizar pedidos, etc.

Com usuário de cliente, ele pode atualizar o perfil, fazer um pedido, adicionar um produto aos favoritos, etc.

Acesse o resultado da aplicação [Food Explorer](https://github.com/alissonif/IfoodApi).

### 🧪 Tecnologias
- Javascript - Usado para fazer toda a lógica da aplicação;
- NodeJS - Utilizado como ambiente de desenvolvimento;
- Express - Responsável por lidar com requisições HTTP;
- Jest - Utilizado para realizar teste de integrações;
- SQLite - Usado para armazenar dados;
- Knex - Utilizado para gerar comandos SQL;
- Multe - Utilizado para gerenciar o upload de imagens;
- JWT (JSON Web Toke) - Criação do token para acesso do usuário;
- Git - Responsável por realizar o versionamento do código;

### :hammer: Funcionalidades

- [x] Cadastrar um usuário;
- [x] Autenticar um usuário;
- [x] Cadastrar, atualizar, mostrar ou deletar um prato;
- [x] Cadastrar, ou mostrar um ingrediente;

### :bulb: Iniciando a aplicação
- Comece clonando o projeto
```bash
	$ git clone https://github.com/alissonif/IfoodApi
```
- Instale as dependências
```bash
	$ npm install
```
- Inicie o servidor local
```bash
	$ npm run dev
```
- Se tudo dê certo, a seguinte mensagem vai aparecer no terminal
> _Server is running on port 3000_

### Para ter acesso a aplicação utilize as seguintes contas
<b>Como admin:</b> </br>
email: admin@email.com </br>
senha: 123456

<b>Como user:</b> </br>
email: user@email.com </br>
senha: 123456 

> :warning: _Por essa aplicação se encontrar hospedada em um serviço gratuito, o Backend "hiberna" após 15 minutos de inatividade.
> Se você tentar acessar o site e não houver uma resposta, aguarde aproximadamente 1 minuto ou mais pois ele estará "inicializando" os serviços._
---
### :bust_in_silhouette: Autor
Feito com :purple_heart: por José Alisson -  [Acompanhe minhas redes](https://www.linkedin.com/in/josealissonif/)

