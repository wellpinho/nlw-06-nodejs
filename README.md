# nlw-06-nodejs
NLW sexta edição nodejs

## Entidades e relacionamentos
<img src="./print/entity.png" />

## Usados no projeto
- NodeJS:  https://nodejs.org/en/
- Typescript
- Express

## Docker para Ubuntu 20+
https://docs.docker.com/engine/install/ubuntu/

## DB
- SQLite3
- typeORM: https://typeorm.io
- dbeaver: https://dbeaver.io/download/

## Regras de negócio
- Cadastro de usuário
  - Não é permitido cadastro de usuário com mesmo email
  - Não é permitido cadastrar usuário sem email

- Cadastro de TAG
  - Não é permitido cadastrar mais de uma TAG com mesmo nome.
  - Não é permitido cadastrar TAG sem nome.
  - Não é permitido cadastro por usuários que não sejam admins

- Cadastro de elogios
  - Não é permitido um user cadastrar elogio para si mesmo.
  - Não é permitido cadastrar elogios para user inválidos
  - User precisa esta autenticado na aplicação.