# Serverless API

API REST com AWS Lambda + Serverless Framework.

## Endpoints

| Método | Rota         | Descrição                          |
|--------|--------------|------------------------------------|
| GET    | `/items`     | Lista todos os items               |
| GET    | `/items?id=1`| Busca um item por ID               |
| POST   | `/items`     | Cria um novo item                  |

## Setup

```bash
npm install -g serverless
npm install
```

## Rodar localmente

```bash
npm install serverless-offline --save-dev
# adicione "serverless-offline" em plugins no serverless.yml
npm run offline
```

## Deploy

```bash
npm run deploy           # deploy em dev
npm run deploy:prod      # deploy em prod
```

## Testar localmente (invoke)

```bash
npm run invoke:get
npm run invoke:create
```

## Exemplo de POST body

```json
{
  "name": "Novo Item",
  "price": 39.90
}
```
