# Exercício Prático

- 1 ) Crie uma api de cadastro de usuários que deve receber os seguintes dados no momento do cadastro, api também deve gerar um id único para cada registro.

`POST : /usuários`

```ts
{
  name: "user",
  password: "1212343@"
}
```

- 2 ) Crie um enpoint de login que ao passar um name e um password válido retorne um JWT válido por 1 ahora.

`POST : /login`

```ts
{
  name: "user",
  password: "1212343@"
}
```

- 3.  Crie um endpoint que lista todos usuários, somente usuários autenticados podem acessar esse endpoint. Será necessário passar um token de autenticação válido no header da chamada. O response da api não deve retornar a senha dos usuários cadastrados.

`GET : /usuarios`

```ts
[
{
 id:”121”,
  name: "user",
},
{
 id:”122321”,
  name: "user 2",
}
]
```
