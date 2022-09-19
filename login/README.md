# LOGIN

## O que é o projeto

- O projeto é um Micro Frontend/ Mini App, do tipo Application/ Parcel, construído a partir do framework Single Spa, que é gerenciado/ renderizado pelo Orquestrador por meio de registros de rotas. O projeto é feito em ** Angular 2+** (sempre nas versões mais recentes).

# Método de criação da Application / Parcel:

1º - Gerar o projeto com o comando: **npx create-single-spa**.

---

2º - Selecionar nas opções de criação: O diretório do projeto como **raíz** ("**.**"), o tipo como **
single-spa-application / parcel**, o framework como **angular**, o nome do projeto de acordo com o Micro Frontend/ Mini
App que está sendo criado (Ex: **teste-exemplo**), o uso do angular routing como **yes**, o formato de stylesheet como **
SCSS**, o uso do typescript no projeto como **yes**, o uso do single-spa Layout Engine como **yes**, a instalação do
pacote single-spa-angular como **yes**.

---

3º - Será necessário configurar alguns arquivos na mão, e adicionar alguns arquivos extras, dependendo da **versão do
angular** que estiver sendo utilizada (versões mais recentes, que não possuem suporte do **Single Spa**, necessitam de
algumas alterações extras).

---

4ºA - Alterar o arquivo **package.json**, dentro de **"scripts"**

- Trocando a propriedade **"start"** original por **"start": "npm run serve:single-spa:teste-nome-do-projeto"**.

- Trocando a propriedade **"build"** original por **"build": "npm run build:single-spa:teste-nome-do-projeto"**.

- Trocando a propriedade **"serve:single-spa:teste-nome-do-projeto"** original por
  **"serve:single-spa:teste-nome-do-projeto": "ng serve --disable-host-check --port port-number
  --deploy-url http://localhost:port-number/ --live-reload false"**.

- Trocando a propriedade **"build:single-spa:teste-nome-do-projeto"** original por **"build:single-spa:
  teste-nome-do-projeto": "ng build --prod --deploy-url /dist/teste-nome-do-projeto --output-hashing none"**.

---

5ºA - Alterar o arquivo **main.single-spa.ts**, adicionando o import **import 'zone.js/dist/zone'**.

---

6ºA - Alterar o arquivo **app.module.ts**, dentro de **providers**, adicionando o provider **{ provide: APP_BASE_HREF,
useValue: '/nome-da-rota' }**, e seu respectivo import.

---

7ºA - Alterar o arquivo **tsconfig.app.json**, dentro de **"types"**, adicionando o tipo **"systemjs"**.

---

# Comando para gerar component pai

ng g m caminho --routing --route nome-component --module app-routing.module.ts

# Para gerar component filho

```ts
    ng g m caminho/nome-component
    ng g c caminho/nome-component
```

# Material deve ser instalado na mão

npm install --save @angular/material @angular/cdk

# Usado tailwind

npm i tailwindcss -D

ng add ngx-tailwind
