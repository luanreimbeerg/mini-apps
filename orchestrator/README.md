# Orchestrator

# O que é o projeto?

O projeto é um **Orquestrador**, construído a partir do framework **Single Spa**, que gerencia os **Micro Frontends
/Mini Apps** por meio de registros de rotas. Este projeto não possui Angular (é "agnóstico" de frameworks para Js).

# Método de criação do Orquestrador:

1º - Gerar o projeto com o comando: **npx create-single-spa**.

---

---

2º - Selecionar nas opções de criação: O diretório do projeto como **raiz** ("**.**"), o tipo como **single-spa root
config**, o gerenciador de pacotes como **npm**, o uso do typescript no projeto como **yes**, o uso do single-spa Layout
Engine como **yes**, e o nome da organização como **projetinho**.

---

---

3º - Limpar o arquivo **index.ejs** (remover comentários gerados pelo CLI).

---

---

4º - No arquivo **index.ejs**, adicionar nos imports do **systemjs-importmap** o apelido e a rota do próprio
Orquestrador, assim como de cada Micro Frontend/ Mini App que será criado, no formato **"chave": "valor"**.

Ex:

```json
{
  "imports": {
    "@projetinho/root-config": "http://localhost:5000/projetinho-root-config.js",
    "@projetinho/angular-example": "//localhost:4200/main.js"
  }
}
```

---

---

# Como usar?

1º - Rodar npm install.

---

---

2º - Rodar npm start para inicializar o projeto.
