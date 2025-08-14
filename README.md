# 🧥 BazarSystem - Controle de Vendas

projeto de extensão
---

💻 Sistema simples feito em HTML e JavaScript para gerenciar o controle de vendas de um **bazar beneficente**, com funcionalidades como:

- Cadastro e controle de **estoque** por categoria
- Registro de **vendas** com valor, quantidade, forma de pagamento e descrição (opcional)
- Histórico de vendas com **filtros por data, forma de pagamento e categoria**
- Cálculo do **valor total arrecadado**
- Botão de **desfazer exclusão** de venda
- Interface amigável e fácil de usar

---

## 💡 Funcionalidades

### ✅ Página Principal (`bazar.html`)

- Registro de vendas com:
  - Peça vendida (múltiplas por venda)
  - Quantidade
  - Valor total da venda
  - Forma de pagamento
  - Descrição (opcional)
- Botão para **adicionar outra peça vendida** na mesma venda
- Atualização automática do estoque
- Visualização em tempo real do estoque na barra lateral

### 📦 Estoque (`estoque.html`)

- Cadastro inicial de peças por categoria
- Atualização da quantidade de peças
- Adição de **novas categorias personalizadas**
- Botão para **zerar todo o estoque**

### 📊 Histórico (`historico.html`)

- Listagem de todas as vendas realizadas
- Filtros por:
  - Data
  - Categoria
  - Forma de pagamento
- Valor total arrecadado atualizado automaticamente
- Botão para **excluir vendas individuais**
- Botão de **desfazer última exclusão**

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **JavaScript (puro)**
- **LocalStorage** (armazenamento local no navegador)

---

## ✅ Como Usar

1. Abra o arquivo `estoque.html` para cadastrar ou atualizar o estoque.
2. Use a página `bazar.html` para registrar cada venda.
3. Acompanhe o histórico acessando `historico.html`.

> Nenhum servidor ou backend é necessário — tudo funciona localmente via navegador!

---

## 📌 Observações

- Os dados são salvos no navegador usando LocalStorage. Ao limpar o cache ou usar outro navegador/dispositivo, os dados são perdidos.
- Ideal para uso em **eventos beneficentes, feiras ou bazares comunitários**.

---

## 👩‍💻 Autora

Desenvolvido por Kathryn Azevedo ✨  

---
## 🛑 Termos de Uso

**Este projeto foi criado apenas para fins acadêmicos. Qualquer reprodução, redistribuição ou uso parcial/total sem autorização está estritamente proibido.**
 



