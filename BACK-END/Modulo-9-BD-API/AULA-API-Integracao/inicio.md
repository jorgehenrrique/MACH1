# NPM comandos básicos

sintaxe: `npm install <packgeName>@<version> ou npm i`

- `npm -v` checar versao

Iniciar projeto:
`npm init`

Instalar o pacote node e as dependencias:
`npm i`

---

Instalar o pacote express:
`npm i express`

Instalar o pacote do BD PostgreSQL:
`npm i pg`

Instalar dotenv para guardar cheves:
`npm i dotenv`

- Armazene chave/valor no arquivo .env
  `PASS=value`
- Utilize no codigo:

```js
const dotenv = require('dotenv');
dotenv.config();
const { PASS } = process.env;
```

---

Instalar ESLint para informar erros, e auxiliar no desenvolvimento
`npm install eslint -D`
