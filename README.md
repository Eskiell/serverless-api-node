# Serverless API

API REST construída com **Node.js 20**, **AWS Lambda** e **Serverless Framework v4**.

## Estrutura do Projeto

```
serverless-api-node/
├── serverless.yml            # Configuração do Serverless Framework
├── package.json
├── src/
│   ├── handlers/
│   │   ├── getText.js        # Handler GET /hello
│   │   └── getTime.js        # Handler GET /server-time
│   └── utils/
│       └── response.js       # Helper para montar respostas HTTP
└── README.md
```

## Endpoints

| Método | Rota           | Descrição                                          |
|--------|----------------|----------------------------------------------------|
| GET    | `/hello`       | Retorna uma mensagem de boas-vindas                |
| GET    | `/server-time` | Retorna o horário atual do servidor (ISO + timestamp) |

### Exemplos de resposta

**GET /hello**
```json
{
  "message": "Bem-vindo à API Serverless!"
}
```

**GET /server-time**
```json
{
  "horario": "2026-03-05T12:00:00.000Z",
  "timestamp": 1772366400000
}
```

## Pré-requisitos

- Node.js 20+
- Serverless Framework v4 (`npm install -g serverless`)
- AWS CLI configurado com o profile `serverless-deploy`

## Setup

```bash
npm install
```

## Deploy

```bash
npm run deploy           # deploy em dev (us-east-1)
npm run deploy:prod      # deploy em prod
```

## Remover stack

```bash
npm run remove
```

## Testar localmente (invoke)

```bash
npm run invoke:text      # invoca getText
npm run invoke:time      # invoca getTime
```

## Logs

```bash
npm run logs:text        # logs em tempo real de getText
npm run logs:time        # logs em tempo real de getTime
```

## Configuração (serverless.yml)

| Propriedade  | Valor                        |
|--------------|------------------------------|
| Runtime      | `nodejs20.x`                 |
| Região       | `us-east-1` (padrão)        |
| Memória      | 256 MB                       |
| Timeout      | 10 s                         |
| Stage padrão | `dev`                        |
```
