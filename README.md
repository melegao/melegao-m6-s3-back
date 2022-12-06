# Kenzie CRM

Esse projeto foi construído em Node.js e utiliza algumas bibliotecas para seu correto funcionamento.

## Instruções

Para instalar as depências, utilize o comando: `yarn`.


Para rodar o projeto localmente, utilize o comando: `yarn dev`.

O projeto está rodando na porta 4000

**Importante: Para o correto funcionamento, utilize em conjunto a aplicação de frontend e siga suas instruções**

Para abrir o repositório frontend [clique aqui](https://github.com/melegao/m6-s3).

___
## Rotas usuário

`POST /users - Criação usuário`

```json
{
	"name": "Maria Santos",
	"email": "maria@gmail.com",
	"phone": "123456",
	"password": "SenhaFort!3"
}
```

`POST /users/login - Login`

```json
{
	"email": "maria@gmail.com",
	"password": "SenhaFort!3"
}
```

`GET /users - Listar usuários`

Acesso público


`GET /users/me - Listar o próprio usuário`

Necessita de Token no header da requisição.

`PATCH users/me/updatepassword - Atualizar senha`

Necessita de Token no header da requisição.

```json
{
	"email": "maria@gmail.com",
	"password": "SenhaFort!56"
}
```

`DELETE users/me - Apagar conta`

Necessita de Token no header da requisição.

___

## Rotas contatos(clientes)

`POST /users - Criação contato(cliente)`

Necessita de Token no header da requisição.

```json
{
	"name": "João dos Santos",
	"email": "joao@gmail.com",
	"phone": "11966556655"
}
```

`PATCH users/contact/:id - Atualizar contato(cliente)`

Necessita de Token no header da requisição.

```json
{
	"name": "João dos Santos Silva"
}
```

`PATCH users/contact - Listar contatos(clientes)`

Necessita de Token no header da requisição.

`DELETE users/contact/:id - Deletar contato(cliente)`

Necessita de Token no header da requisição.







