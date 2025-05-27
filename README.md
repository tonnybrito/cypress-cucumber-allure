# cypress-cucumber-allure


Como recriar essas pastas localmente após clonar o projeto:
🔁 1. Clone o repositório acesse sua pasta de testes e digite: 
git clone git@github.com:tonnybrito/cypress-cucumber-allure.git

Entre na pasta colnada:
cd cypress-cucumber-allure

📦 2. Instale as dependências (recria node_modules/)
npm install

Usando os comandos no seu projeto
Após a instalação, dentro do seu projeto, você pode rodar:
    • Para gerar o relatório (a partir da pasta allure-results):
allure generate allure-results --clean -o allure-report
allure open 

OBS: se após rodar os testes a pasta Allure results não for criada rode o comando:
npx cypress run --env allure=true

depois rode novamente:
allure generate allure-results --clean -o allure-report
allure open 
