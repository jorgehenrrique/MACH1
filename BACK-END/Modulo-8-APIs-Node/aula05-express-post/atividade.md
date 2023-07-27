Vamos praticar! Agora vamos criar uma API utilizando um arquivo .JSON para armazenar os dados.

# a) Crie uma API para efetuar cadastro e obtenção de uma lista de clientes. Utilizando POST você deverá construir uma rota para receber uma requisição contendo o body da figura;

# b) Você deverá gravar esses dados recebidos no body, e, além disso, deve incluir para cada cliente cadastrado um ID exclusivo;

# c) Construa uma rota utilizando GET para retornar a lista de clientes que foram cadastrados, e caso não exista nenhum devolva uma resposta coerente ao seu “consumidor” da API;

Dicas importantes:

- Valide os dados recebidos, não grave qualquer coisa no arquivo.

- Utilize a tipagem forte do typescript como aliada para o desenvolvimento.

- Pesquise e questione o que for necessário enquanto estiver desenvolvendo o exercício.

- Se possível, comente as ideias de solução com os colegas da turma.

Obs.: Não deixe de encaminhar os arquivos e publicar seu código em seu repositório no git.

[Title](https://lh3.googleusercontent.com/NTbmfG-fGOQG46fJN9DOhN2OwLP_8hvqv0bk0c2BzivB-3KfN_7xxRKpZV7htMNtLe_8L8m8i__9a4KEcOScjkFsXhczePsg-ZQexB0cxP-yi6cfyzYl_MzWSyxpC1GCyw=w395)

# Modelo de dados:

```json
{
  "name": "",
  "age": 0,
  "email": "",
  "profile": {
    "type": "",
    "credit": 0,
    "business": false
  }
}
```

- Exemplo enviado via POST:

```json
{
  "name": "Rei",
  "age": 30,
  "email": "teste@email",
  "profile": {
    "type": "server",
    "credit": 44000,
    "business": true
  }
}
```

- Exemplo salvo no json:

```json
{
  "id": "29f517fd-843d-46ed-923b-07133de75349",
  "name": "Rei",
  "age": 30,
  "email": "teste@email",
  "profile": {
    "type": "server",
    "credit": 44000,
    "business": true
  }
}
```
