# Instalar pacode (fs) para gerenciar arquivos e manipular o .json:

`npm install fs`

# Instalar uuid/typescript (gera id unico):

`npm install uuid`
E
`npm i @types/uuid`

**Nodemon componente**

- Ele possibilita atualizar o servidor express, sem precisar parar e startar o 'node server.js', novamente.

# Instalar Nodemon:

`npm i nodemon --save-dev`

# Executar Nodemon:

- Alternativa um:

`npx nodemon server.js`

- Outra alternativa é configurar um script para o nodemon, no arquivo 'package.json':

```json
  "scripts": {
    "server": "nodemon src/server.ts"
  },
```

- Novo comando para rodar o nodemon:
  `npm run server`

Obs: 'server.js' é o nome do arquivo criado e pode ser qualquer nome.

Obs: Se estiver em TypeScript, instale tbm o `ts-node`, para rodar o arquivo .ts
`npm i ts-node -D`
