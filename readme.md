
# RepoProvas

<p align="center">
   <img width=350 src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5c3-fe0f.svg"/>
</p>


- As semanas de provas deixam qualquer universitário desesperado por ajuda, que nem sempre tem tempo suficiente para se preparar para elas.
- E se tivéssemos uma API que organiza as provas antigas?
- No RepoProvas Você pode criar uma conta e procurar por provas de suas disciplinas e professores ou enviar provas antigas para ajudar os calouros :)
## Usage

Install my-project with npm and configure .env

```bash
  git clone git@github.com:marcojr73/projeto20-repoprovas.git
```

```bash
  npm install

  npx prisma migrate dev
  
  npm run dev
```
    
## API Reference

#### Sign-up

```
  POST /sign-up
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `body` |`email` | `string` | **Required**  |
| `body` |`password` | `string` | **Required** |

#### Sign-in

```
  POST /sign-in
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `body` |`email` | `string` | **Required**  |
| `body` |`password` | `string` | **Required** |

#### Create test 

```
  POST /tests/create
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer token` | **Required**  |
| `body` |`name` | `string` | **Required**  |
| `body` |`pdfUrl` | `string` | **Required** |
| `body` |`category*` | `string` | **Required**  |
| `body` |`discipline*` | `string` | **Required** |
| `body` |`teacher*` | `string` | **Required** |

category, teacher and discipline must be consistent with the bank's rules

#### Views the tests by discipline

```
  GET /tests/disciplines
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer token` | **Required**  |

#### Views the tests by teacher

```
  GET /tests/disciplines
```

| sent by |Parameter | Type     |                 |
| :-------- |:-------- | :------- | :------------------------- |
| `header` |`authorization` | `Bearer token` | **Required**  |