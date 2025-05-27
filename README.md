

````markdown
# Como recriar essas pastas localmente após clonar o projeto

## 🔁 Clone o repositório

```bash
git clone git@github.com:tonnybrito/cypress-cucumber-allure.git
cd cypress-cucumber-allure
````

## 📦 Instale as dependências (recria `node_modules/`)

```bash
npm install
```

---

## 🧪 Instalar o Allure CLI no seu sistema (se preciso for)

### Instalação via npm

Se você já tem o Node.js instalado (o que é o caso se está usando Cypress), pode instalar o Allure CLI globalmente com o seguinte comando:

```bash
npm install -g allure-commandline --save-dev
```

---

## 🚀 Usando os comandos no seu projeto

Após a instalação, dentro do seu projeto, você pode rodar os seguintes comandos:

### 1. Para gerar o relatório (a partir da pasta `allure-results`):

```bash
npm run cypress:run
npm run allure:generate
allure open
```

### ❗ Se aparecer um erro dizendo que a pasta `allure-results` não foi criada:

Rode este comando:

```bash
npx cypress run --env allure=true
```

Depois, novamente:

```bash
npm run cypress:run
npm run allure:generate
allure open
```

---

Ao final, deverá aparecer no seu browser o relatório do **ALLURE** mostrando os resultados (inclusive os erros, se houver).

### ❗ Alterando o nome do projeto:

``
Lembrando também que: Para usar esse projeto num novo projeto o nome deve ser alterado na pasta "mãe" bem como no arquivo package.json no item "name": "colocar nome do seu projeto"

